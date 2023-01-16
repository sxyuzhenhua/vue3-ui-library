<template>
    <div
      ref="selectWrapper"
      v-click-outside:[popperPaneRef]="handleClose"
      :class="wrapperKls"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click.stop="toggleMenu"
    >
      <yu-tooltip
        ref="tooltipRef"
        :visible="dropMenuVisible"
        :placement="placement"
        :teleported="teleported"
        :popper-class="[nsSelect.e('popper'), popperClass]"
        :fallback-placements="['bottom-start', 'top-start', 'right', 'left']"
        :effect="effect"
        pure
        trigger="click"
        :transition="`${nsSelect.namespace.value}-zoom-in-top`"
        :stop-popper-mouse-event="false"
        :gpu-acceleration="false"
        :persistent="persistent"
        @show="handleMenuEnter"
      >
        <template #default>
          <div
            class="select-trigger"
            @mouseenter="inputHovering = true"
            @mouseleave="inputHovering = false"
          >
            <div
              v-if="multiple"
              ref="tags"
              :class="nsSelect.e('tags')"
              :style="selectTagsStyle"
            >
              <span
                v-if="collapseTags && selected.length"
                :class="[
                  nsSelect.b('tags-wrapper'),
                  { 'has-prefix': prefixWidth && selected.length },
                ]"
              >
                <yu-tag
                  :closable="!selectDisabled && !selected[0].isDisabled"
                  :size="collapseTagSize"
                  :hit="selected[0].hitState"
                  :type="tagType"
                  disable-transitions
                  @close="deleteTag($event, selected[0])"
                >
                  <span :class="nsSelect.e('tags-text')" :style="tagTextStyle">
                    {{ selected[0].currentLabel }}
                  </span>
                </yu-tag>
                <yu-tag
                  v-if="selected.length > 1"
                  :closable="false"
                  :size="collapseTagSize"
                  :type="tagType"
                  disable-transitions
                >
                  <yu-tooltip
                    v-if="collapseTagsTooltip"
                    :disabled="dropMenuVisible"
                    :fallback-placements="['bottom', 'top', 'right', 'left']"
                    :effect="effect"
                    placement="bottom"
                    :teleported="teleported"
                  >
                    <template #default>
                      <span :class="nsSelect.e('tags-text')"
                        >+ {{ selected.length - 1 }}</span
                      >
                    </template>
                    <template #content>
                      <div :class="nsSelect.e('collapse-tags')">
                        <div
                          v-for="(item, idx) in selected.slice(1)"
                          :key="idx"
                          :class="nsSelect.e('collapse-tag')"
                        >
                          <yu-tag
                            :key="getValueKey(item)"
                            class="in-tooltip"
                            :closable="!selectDisabled && !item.isDisabled"
                            :size="collapseTagSize"
                            :hit="item.hitState"
                            :type="tagType"
                            disable-transitions
                            :style="{ margin: '2px' }"
                            @close="deleteTag($event, item)"
                          >
                            <span
                              :class="nsSelect.e('tags-text')"
                              :style="{
                                maxWidth: inputWidth - 75 + 'px',
                              }"
                              >{{ item.currentLabel }}</span
                            >
                          </yu-tag>
                        </div>
                      </div>
                    </template>
                  </yu-tooltip>
                  <span v-else :class="nsSelect.e('tags-text')"
                    >+ {{ selected.length - 1 }}</span
                  >
                </yu-tag>
              </span>
              <!-- <div> -->
              <transition v-if="!collapseTags" @after-leave="resetInputHeight">
                <span
                  :class="[
                    nsSelect.b('tags-wrapper'),
                    { 'has-prefix': prefixWidth && selected.length },
                  ]"
                >
                  <yu-tag
                    v-for="item in selected"
                    :key="getValueKey(item)"
                    :closable="!selectDisabled && !item.isDisabled"
                    :size="collapseTagSize"
                    :hit="item.hitState"
                    :type="tagType"
                    disable-transitions
                    @close="deleteTag($event, item)"
                  >
                    <span
                      :class="nsSelect.e('tags-text')"
                      :style="{ maxWidth: inputWidth - 75 + 'px' }"
                      >{{ item.currentLabel }}</span
                    >
                  </yu-tag>
                </span>
              </transition>
              <!-- </div> -->
              <input
                v-if="filterable"
                ref="input"
                v-model="query"
                type="text"
                :class="[nsSelect.e('input'), nsSelect.is(selectSize)]"
                :disabled="selectDisabled"
                :autocomplete="autocomplete"
                :style="{
                  marginLeft:
                    (prefixWidth && !selected.length) || tagInMultiLine
                      ? `${prefixWidth}px`
                      : '',
                  flexGrow: 1,
                  width: `${inputLength / (inputWidth - 32)}%`,
                  maxWidth: `${inputWidth - 42}px`,
                }"
                @focus="handleFocus"
                @blur="handleBlur"
                @keyup="managePlaceholder"
                @keydown="resetInputState"
                @keydown.down.prevent="navigateOptions('next')"
                @keydown.up.prevent="navigateOptions('prev')"
                @keydown.esc="handleKeydownEscape"
                @keydown.enter.stop.prevent="selectOption"
                @keydown.delete="deletePrevTag"
                @keydown.tab="visible = false"
                @compositionstart="handleComposition"
                @compositionupdate="handleComposition"
                @compositionend="handleComposition"
                @input="debouncedQueryChange"
              />
            </div>
            <yu-input
              :id="id"
              ref="reference"
              v-model="selectedLabel"
              type="text"
              :placeholder="currentPlaceholder"
              :name="name"
              :autocomplete="autocomplete"
              :size="selectSize"
              :disabled="selectDisabled"
              :readonly="readonly"
              :validate-event="false"
              :class="[nsSelect.is('focus', visible)]"
              :tabindex="multiple && filterable ? -1 : undefined"
              @focus="handleFocus"
              @blur="handleBlur"
              @input="debouncedOnInputChange"
              @paste="debouncedOnInputChange"
              @compositionstart="handleComposition"
              @compositionupdate="handleComposition"
              @compositionend="handleComposition"
              @keydown.down.stop.prevent="navigateOptions('next')"
              @keydown.up.stop.prevent="navigateOptions('prev')"
              @keydown.enter.stop.prevent="selectOption"
              @keydown.esc="handleKeydownEscape"
              @keydown.tab="visible = false"
            >
              <template v-if="$slots.prefix" #prefix>
                <div
                  style="
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <slot name="prefix" />
                </div>
              </template>
              <template #suffix>
                <yu-icon
                  v-if="iconComponent && !showClose"
                  :class="[nsSelect.e('caret'), nsSelect.e('icon'), iconReverse]"
                >
                  <component :is="iconComponent" />
                </yu-icon>
                <yu-icon
                  v-if="showClose && clearIcon"
                  :class="[nsSelect.e('caret'), nsSelect.e('icon')]"
                  @click="handleClearClick"
                >
                  <component :is="clearIcon" />
                </yu-icon>
              </template>
            </yu-input>
          </div>
        </template>
        <template #content>
          <yu-select-menu>
            <yu-scrollbar
              v-show="options.size > 0 && !loading"
              ref="scrollbar"
              tag="ul"
              :wrap-class="nsSelect.be('dropdown', 'wrap')"
              :view-class="nsSelect.be('dropdown', 'list')"
              :class="[
                nsSelect.is(
                  'empty',
                  !allowCreate && Boolean(query) && filteredOptionsCount === 0
                ),
              ]"
            >
              <yu-option v-if="showNewOption" :value="query" :created="true" />
              <slot />
            </yu-scrollbar>
            <template
              v-if="
                emptyText &&
                (!allowCreate || loading || (allowCreate && options.size === 0))
              "
            >
              <slot v-if="$slots.empty" name="empty" />
              <p v-else :class="nsSelect.be('dropdown', 'empty')">
                {{ emptyText }}
              </p>
            </template>
          </yu-select-menu>
        </template>
      </yu-tooltip>
    </div>
  </template>
  
  <script lang="ts">
  // @ts-nocheck
  import {
    computed,
    defineComponent,
    nextTick,
    onMounted,
    provide,
    reactive,
    toRefs,
    unref,
  } from 'vue'
  import { useResizeObserver } from '@vueuse/core'
  import { placements } from '@popperjs/core'
  import { ClickOutside } from '@yu/directives'
  import { useFocus, useLocale, useNamespace } from '@yu/hooks'
  import YuInput from '@yu/components/input'
  import YuTooltip, {
    useTooltipContentProps,
  } from '@yu/components/tooltip'
  import YuScrollbar from '@yu/components/scrollbar'
  import YuTag, { tagProps } from '@yu/components/tag'
  import YuIcon from '@yu/components/icon'
  import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@yu/constants'
  import { iconPropType, isValidComponentSize } from '@yu/utils'
  import { ArrowDown, CircleClose } from '@element-plus/icons-vue'
  import YuOption from './option.vue'
  import YuSelectMenu from './select-dropdown.vue'
  import { useSelect, useSelectStates } from './useSelect'
  import { selectKey } from './token'
  
  import type { PropType } from 'vue'
  import type { ComponentSize } from '@yu/constants'
  import type { SelectContext } from './token'
  
  const COMPONENT_NAME = 'YuSelect'
  export default defineComponent({
    name: COMPONENT_NAME,
    componentName: COMPONENT_NAME,
    components: {
      YuInput,
      YuSelectMenu,
      YuOption,
      YuTag,
      YuScrollbar,
      YuTooltip,
      YuIcon,
    },
    directives: { ClickOutside },
    props: {
      name: String,
      id: String,
      modelValue: {
        type: [Array, String, Number, Boolean, Object],
        default: undefined,
      },
      autocomplete: {
        type: String,
        default: 'off',
      },
      automaticDropdown: Boolean,
      size: {
        type: String as PropType<ComponentSize>,
        validator: isValidComponentSize,
      },
      effect: {
        type: String as PropType<'light' | 'dark' | string>,
        default: 'light',
      },
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: {
        type: String,
        default: '',
      },
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: {
        type: Number,
        default: 0,
      },
      placeholder: {
        type: String,
      },
      defaultFirstOption: Boolean,
      reserveKeyword: {
        type: Boolean,
        default: true,
      },
      valueKey: {
        type: String,
        default: 'value',
      },
      collapseTags: Boolean,
      collapseTagsTooltip: {
        type: Boolean,
        default: false,
      },
      teleported: useTooltipContentProps.teleported,
      persistent: {
        type: Boolean,
        default: true,
      },
      clearIcon: {
        type: iconPropType,
        default: CircleClose,
      },
      fitInputWidth: {
        type: Boolean,
        default: false,
      },
      suffixIcon: {
        type: iconPropType,
        default: ArrowDown,
      },
      // eslint-disable-next-line vue/require-prop-types
      tagType: { ...tagProps.type, default: 'info' },
      validateEvent: {
        type: Boolean,
        default: true,
      },
      remoteShowSuffix: {
        type: Boolean,
        default: false,
      },
      suffixTransition: {
        type: Boolean,
        default: true,
      },
      placement: {
        type: String,
        values: placements,
        default: 'bottom-start',
      },
    },
    emits: [
      UPDATE_MODEL_EVENT,
      CHANGE_EVENT,
      'remove-tag',
      'clear',
      'visible-change',
      'focus',
      'blur',
    ],
  
    setup(props, ctx) {
      const nsSelect = useNamespace('select')
      const nsInput = useNamespace('input')
      const { t } = useLocale()
      const states = useSelectStates(props)
      const {
        optionsArray,
        selectSize,
        readonly,
        handleResize,
        collapseTagSize,
        debouncedOnInputChange,
        debouncedQueryChange,
        deletePrevTag,
        deleteTag,
        deleteSelected,
        handleOptionSelect,
        scrollToOption,
        setSelected,
        resetInputHeight,
        managePlaceholder,
        showClose,
        selectDisabled,
        iconComponent,
        iconReverse,
        showNewOption,
        emptyText,
        toggleLastOptionHitState,
        resetInputState,
        handleComposition,
        onOptionCreate,
        onOptionDestroy,
        handleMenuEnter,
        handleFocus,
        blur,
        handleBlur,
        handleClearClick,
        handleClose,
        handleKeydownEscape,
        toggleMenu,
        selectOption,
        getValueKey,
        navigateOptions,
        dropMenuVisible,
  
        reference,
        input,
        tooltipRef,
        tags,
        selectWrapper,
        scrollbar,
        queryChange,
        groupQueryChange,
        handleMouseEnter,
        handleMouseLeave,
      } = useSelect(props, states, ctx)
  
      const { focus } = useFocus(reference)
  
      const {
        inputWidth,
        selected,
        inputLength,
        filteredOptionsCount,
        visible,
        softFocus,
        selectedLabel,
        hoverIndex,
        query,
        inputHovering,
        currentPlaceholder,
        menuVisibleOnFocus,
        isOnComposition,
        isSilentBlur,
        options,
        cachedOptions,
        optionsCount,
        prefixWidth,
        tagInMultiLine,
      } = toRefs(states)
  
      const wrapperKls = computed(() => {
        const classList = [nsSelect.b()]
        const _selectSize = unref(selectSize)
        if (_selectSize) {
          classList.push(nsSelect.m(_selectSize))
        }
        if (props.disabled) {
          classList.push(nsSelect.m('disabled'))
        }
        return classList
      })
  
      const selectTagsStyle = computed(() => ({
        maxWidth: `${unref(inputWidth) - 32}px`,
        width: '100%',
      }))
  
      const tagTextStyle = computed(() => {
        const maxWidth =
          unref(inputWidth) > 123
            ? unref(inputWidth) - 123
            : unref(inputWidth) - 75
        return { maxWidth: `${maxWidth}px` }
      })
  
      provide(
        selectKey,
        reactive({
          props,
          options,
          optionsArray,
          cachedOptions,
          optionsCount,
          filteredOptionsCount,
          hoverIndex,
          handleOptionSelect,
          onOptionCreate,
          onOptionDestroy,
          selectWrapper,
          selected,
          setSelected,
          queryChange,
          groupQueryChange,
        }) as unknown as SelectContext
      )
  
      onMounted(() => {
        states.cachedPlaceHolder = currentPlaceholder.value =
          props.placeholder || t('el.select.placeholder')
        if (
          props.multiple &&
          Array.isArray(props.modelValue) &&
          props.modelValue.length > 0
        ) {
          currentPlaceholder.value = ''
        }
        useResizeObserver(selectWrapper, handleResize)
        if (props.remote && props.multiple) {
          resetInputHeight()
        }
        nextTick(() => {
          const refEl = reference.value && reference.value.$el
          if (!refEl) return
          inputWidth.value = refEl.getBoundingClientRect().width
  
          if (ctx.slots.prefix) {
            const prefix = refEl.querySelector(`.${nsInput.e('prefix')}`)
            prefixWidth.value = Math.max(
              prefix.getBoundingClientRect().width + 5,
              30
            )
          }
        })
        setSelected()
      })
  
      if (props.multiple && !Array.isArray(props.modelValue)) {
        ctx.emit(UPDATE_MODEL_EVENT, [])
      }
      if (!props.multiple && Array.isArray(props.modelValue)) {
        ctx.emit(UPDATE_MODEL_EVENT, '')
      }
  
      const popperPaneRef = computed(() => {
        return tooltipRef.value?.popperRef?.contentRef
      })
  
      return {
        tagInMultiLine,
        prefixWidth,
        selectSize,
        readonly,
        handleResize,
        collapseTagSize,
        debouncedOnInputChange,
        debouncedQueryChange,
        deletePrevTag,
        deleteTag,
        deleteSelected,
        handleOptionSelect,
        scrollToOption,
        inputWidth,
        selected,
        inputLength,
        filteredOptionsCount,
        visible,
        softFocus,
        selectedLabel,
        hoverIndex,
        query,
        inputHovering,
        currentPlaceholder,
        menuVisibleOnFocus,
        isOnComposition,
        isSilentBlur,
        options,
        resetInputHeight,
        managePlaceholder,
        showClose,
        selectDisabled,
        iconComponent,
        iconReverse,
        showNewOption,
        emptyText,
        toggleLastOptionHitState,
        resetInputState,
        handleComposition,
        handleMenuEnter,
        handleFocus,
        blur,
        handleBlur,
        handleClearClick,
        handleClose,
        handleKeydownEscape,
        toggleMenu,
        selectOption,
        getValueKey,
        navigateOptions,
        dropMenuVisible,
        focus,
  
        reference,
        input,
        tooltipRef,
        popperPaneRef,
        tags,
        selectWrapper,
        scrollbar,
  
        wrapperKls,
        selectTagsStyle,
        nsSelect,
        tagTextStyle,
        handleMouseEnter,
        handleMouseLeave,
      }
    },
  })
  </script>
  