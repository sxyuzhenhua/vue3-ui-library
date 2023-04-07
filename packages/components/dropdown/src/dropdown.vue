<template>
  <div :class="[ns.b(), ns.is('disabled', disabled)]">
    <yu-tooltip
      ref="popperRef"
      :role="role"
      :effect="effect"
      :fallback-placements="['bottom', 'top']"
      :popper-options="popperOptions"
      :gpu-acceleration="false"
      :hide-after="trigger === 'hover' ? hideTimeout : 0"
      :manual-mode="true"
      :placement="placement"
      :popper-class="[ns.e('popper'), popperClass]"
      :reference-element="referenceElementRef?.$el"
      :trigger="trigger"
      :trigger-keys="triggerKeys"
      :trigger-target-el="contentRef"
      :show-after="trigger === 'hover' ? showTimeout : 0"
      :stop-popper-mouse-event="false"
      :virtual-ref="triggeringElementRef"
      :virtual-triggering="splitButton"
      :disabled="disabled"
      :transition="`${ns.namespace.value}-zoom-in-top`"
      :teleported="teleported"
      pure
      persistent
      @before-show="handleBeforeShowTooltip"
      @show="handleShowTooltip"
      @before-hide="handleBeforeHideTooltip"
    >
      <template #content>
        <yu-scrollbar
          ref="scrollbar"
          :wrap-style="wrapStyle"
          tag="div"
          :view-class="ns.e('list')"
        >
          <yu-roving-focus-group
            :loop="loop"
            :current-tab-id="currentTabId"
            orientation="horizontal"
            @current-tab-id-change="handleCurrentTabIdChange"
            @entry-focus="handleEntryFocus"
          >
            <yu-dropdown-collection>
              <slot name="dropdown" />
            </yu-dropdown-collection>
          </yu-roving-focus-group>
        </yu-scrollbar>
      </template>
      <template v-if="!splitButton" #default>
        <yu-only-child :id="triggerId" role="button" :tabindex="tabindex">
          <slot name="default" />
        </yu-only-child>
      </template>
    </yu-tooltip>
    <template v-if="splitButton">
      <yu-button-group>
        <yu-button
          ref="referenceElementRef"
          v-bind="buttonProps"
          :size="dropdownSize"
          :type="type"
          :disabled="disabled"
          :tabindex="tabindex"
          @click="handlerMainButtonClick"
        >
          <slot name="default" />
        </yu-button>
        <yu-button
          :id="triggerId"
          ref="triggeringElementRef"
          v-bind="buttonProps"
          role="button"
          :size="dropdownSize"
          :type="type"
          :class="ns.e('caret-button')"
          :disabled="disabled"
          :tabindex="tabindex"
          :aria-label="t('el.dropdown.toggleDropdown')"
        >
          <yu-icon :class="ns.e('icon')"><arrow-down /></yu-icon>
        </yu-button>
      </yu-button-group>
    </template>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import {
  computed,
  defineComponent,
  getCurrentInstance,
  provide,
  ref,
  toRef,
  unref,
} from "vue";
import YuButton from "@yu/components/button";
import YuTooltip from "@yu/components/tooltip";
import YuScrollbar from "@yu/components/scrollbar";
import YuIcon from "@yu/components/icon";
import YuRovingFocusGroup from "@yu/components/roving-focus-group";
import { YuOnlyChild } from "@yu/components/slot";
import { addUnit } from "@yu/utils";
import { EVENT_CODE } from "@yu/constants";
import { useId, useLocale, useNamespace, useSize } from "@yu/hooks";
import { ArrowDown } from "@element-plus/icons-vue";
import {
  YuCollection as YuDropdownCollection,
  dropdownProps,
} from "./dropdown";
import { DROPDOWN_INJECTION_KEY } from "./tokens";

import type { CSSProperties } from "vue";

const { ButtonGroup: YuButtonGroup } = YuButton;

export default defineComponent({
  name: "YuDropdown",
  components: {
    YuButton,
    YuButtonGroup,
    YuScrollbar,
    YuDropdownCollection,
    YuTooltip,
    YuRovingFocusGroup,
    YuOnlyChild,
    YuIcon,
    ArrowDown,
  },
  props: dropdownProps,
  emits: ["visible-change", "click", "command"],
  setup(props, { emit }) {
    const _instance = getCurrentInstance();
    const ns = useNamespace("dropdown");
    const { t } = useLocale();

    const triggeringElementRef = ref();
    const referenceElementRef = ref();
    const popperRef = ref<InstanceType<typeof YuTooltip> | null>(null);
    const contentRef = ref<HTMLElement | null>(null);
    const scrollbar = ref(null);
    const currentTabId = ref<string | null>(null);
    const isUsingKeyboard = ref(false);
    const triggerKeys = [EVENT_CODE.enter, EVENT_CODE.space, EVENT_CODE.down];

    const wrapStyle = computed<CSSProperties>(() => ({
      maxHeight: addUnit(props.maxHeight),
    }));
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)]);

    const defaultTriggerId = useId().value;
    const triggerId = computed<string>(() => {
      return props.id || defaultTriggerId;
    });

    function handleClick() {
      handleClose();
    }

    function handleClose() {
      popperRef.value?.onClose();
    }

    function handleOpen() {
      popperRef.value?.onOpen();
    }

    const dropdownSize = useSize();

    function commandHandler(...args: any[]) {
      emit("command", ...args);
    }

    function onItemEnter() {
      // NOOP for now
    }

    function onItemLeave() {
      const contentEl = unref(contentRef);

      contentEl?.focus();
      currentTabId.value = null;
    }

    function handleCurrentTabIdChange(id: string) {
      currentTabId.value = id;
    }

    function handleEntryFocus(e: Event) {
      if (!isUsingKeyboard.value) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }

    function handleBeforeShowTooltip() {
      emit("visible-change", true);
    }

    function handleShowTooltip(event?: Event) {
      if (event?.type === "keydown") {
        contentRef.value.focus();
      }
    }

    function handleBeforeHideTooltip() {
      emit("visible-change", false);
    }

    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      role: computed(() => props.role),
      triggerId,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave,
    });

    provide("elDropdown", {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: toRef(props, "trigger"),
      hideOnClick: toRef(props, "hideOnClick"),
    });

    const onFocusAfterTrapped = (e: Event) => {
      e.preventDefault();
      contentRef.value?.focus?.({
        preventScroll: true,
      });
    };

    const handlerMainButtonClick = (event: MouseEvent) => {
      emit("click", event);
    };

    return {
      t,
      ns,
      scrollbar,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      triggerId,
      triggerKeys,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleEntryFocus,
      handleClose,
      handleOpen,
      handleBeforeShowTooltip,
      handleShowTooltip,
      handleBeforeHideTooltip,
      onFocusAfterTrapped,
      popperRef,
      contentRef,
      triggeringElementRef,
      referenceElementRef,
    };
  },
});
</script>
