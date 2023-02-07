<template>
  <yu-tooltip
    ref="popper"
    :visible="showPicker"
    :show-arrow="false"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :offset="0"
    :gpu-acceleration="false"
    :popper-class="[ns.be('picker', 'panel'), ns.b('dropdown'), popperClass]"
    :stop-popper-mouse-event="false"
    effect="light"
    trigger="click"
    :transition="`${ns.namespace.value}-zoom-in-top`"
    persistent
  >
    <template #content>
      <div v-click-outside="hide">
        <div :class="ns.be('dropdown', 'main-wrapper')">
          <hue-slider ref="hue" class="hue-slider" :color="color" vertical />
          <sv-panel ref="svPanel" :color="color" />
        </div>
        <alpha-slider v-if="showAlpha" ref="alpha" :color="color" />
        <predefine
          v-if="predefine"
          ref="predefine"
          :color="color"
          :colors="predefine"
        />
        <div :class="ns.be('dropdown', 'btns')">
          <span :class="ns.be('dropdown', 'value')">
            <yu-input
              v-model="customInput"
              :validate-event="false"
              size="small"
              @keyup.enter="handleConfirm"
              @blur="handleConfirm"
            />
          </span>
          <yu-button
            :class="ns.be('dropdown', 'link-btn')"
            text
            size="small"
            @click="clear"
          >
            {{ t('el.colorpicker.clear') }}
          </yu-button>
          <yu-button
            plain
            size="small"
            :class="ns.be('dropdown', 'btn')"
            @click="confirmValue"
          >
            {{ t('el.colorpicker.confirm') }}
          </yu-button>
        </div>
      </div>
    </template>
    <template #default>
      <div
        :id="buttonId"
        :class="btnKls"
        role="button"
        :aria-label="buttonAriaLabel"
        :aria-labelledby="buttonAriaLabelledby"
        :aria-description="
          t('el.colorpicker.description', { color: modelValue || '' })
        "
        :tabindex="tabindex"
        @keydown.enter="handleTrigger"
      >
        <div v-if="colorDisabled" :class="ns.be('picker', 'mask')" />
        <div :class="ns.be('picker', 'trigger')" @click="handleTrigger">
          <span :class="[ns.be('picker', 'color'), ns.is('alpha', showAlpha)]">
            <span
              :class="ns.be('picker', 'color-inner')"
              :style="{
                backgroundColor: displayedColor,
              }"
            >
              <yu-icon
                v-show="modelValue || showPanelColor"
                :class="[ns.be('picker', 'icon'), ns.is('icon-arrow-down')]"
              >
                <arrow-down />
              </yu-icon>
              <yu-icon
                v-if="!modelValue && !showPanelColor"
                :class="[ns.be('picker', 'empty'), ns.is('icon-close')]"
              >
                <close />
              </yu-icon>
            </span>
          </span>
        </div>
      </div>
    </template>
  </yu-tooltip>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
} from 'vue'
import { debounce } from 'lodash-unified'
import { YuButton } from '@yu/components/button'
import { YuIcon } from '@yu/components/icon'
import { ClickOutside as vClickOutside } from '@yu/directives'
import {
  useDisabled,
  useFormItem,
  useFormItemInputId,
  useLocale,
  useNamespace,
  useSize,
} from '@yu/hooks'
import { YuTooltip } from '@yu/components/tooltip'
import { YuInput } from '@yu/components/input'
import { UPDATE_MODEL_EVENT } from '@yu/constants'
import { debugWarn } from '@yu/utils'
import { ArrowDown, Close } from '@element-plus/icons-vue'
import AlphaSlider from './components/alpha-slider.vue'
import HueSlider from './components/hue-slider.vue'
import Predefine from './components/predefine.vue'
import SvPanel from './components/sv-panel.vue'
import Color from './utils/color'
import {
  colorPickerContextKey,
  colorPickerEmits,
  colorPickerProps,
} from './color-picker'
import type { TooltipInstance } from '@yu/components/tooltip'

defineOptions({
  name: 'YuColorPicker',
})
const props = defineProps(colorPickerProps)
const emit = defineEmits(colorPickerEmits)

const { t } = useLocale()
const ns = useNamespace('color')
const { formItem } = useFormItem()
const colorSize = useSize()
const colorDisabled = useDisabled()

const { inputId: buttonId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
})

const hue = ref<InstanceType<typeof HueSlider>>()
const sv = ref<InstanceType<typeof SvPanel>>()
const alpha = ref<InstanceType<typeof AlphaSlider>>()
const popper = ref<TooltipInstance>()

// active-change is used to prevent modelValue changes from triggering.
let shouldActiveChange = true

const color = reactive(
  new Color({
    enableAlpha: props.showAlpha,
    format: props.colorFormat || '',
    value: props.modelValue,
  })
) as Color

const showPicker = ref(false)
const showPanelColor = ref(false)
const customInput = ref('')

const displayedColor = computed(() => {
  if (!props.modelValue && !showPanelColor.value) {
    return 'transparent'
  }
  return displayedRgb(color, props.showAlpha)
})

const currentColor = computed(() => {
  return !props.modelValue && !showPanelColor.value ? '' : color.value
})

const buttonAriaLabel = computed<string | undefined>(() => {
  return !isLabeledByFormItem.value
    ? props.label || t('el.colorpicker.defaultLabel')
    : undefined
})

const buttonAriaLabelledby = computed<string | undefined>(() => {
  return isLabeledByFormItem.value ? formItem?.labelId : undefined
})

const btnKls = computed(() => {
  return [
    ns.b('picker'),
    ns.is('disabled', colorDisabled.value),
    ns.bm('picker', colorSize.value),
  ]
})

function displayedRgb(color: Color, showAlpha: boolean) {
  if (!(color instanceof Color)) {
    throw new TypeError('color should be instance of _color Class')
  }

  const { r, g, b } = color.toRgb()
  return showAlpha
    ? `rgba(${r}, ${g}, ${b}, ${color.get('alpha') / 100})`
    : `rgb(${r}, ${g}, ${b})`
}

function setShowPicker(value: boolean) {
  showPicker.value = value
}

const debounceSetShowPicker = debounce(setShowPicker, 100)

function hide() {
  debounceSetShowPicker(false)
  resetColor()
}

function resetColor() {
  nextTick(() => {
    if (props.modelValue) {
      color.fromString(props.modelValue)
    } else {
      color.value = ''
      nextTick(() => {
        showPanelColor.value = false
      })
    }
  })
}

function handleTrigger() {
  if (colorDisabled.value) return
  debounceSetShowPicker(!showPicker.value)
}

function handleConfirm() {
  color.fromString(customInput.value)
}

function confirmValue() {
  const value = color.value
  emit(UPDATE_MODEL_EVENT, value)
  emit('change', value)
  if (props.validateEvent) {
    formItem?.validate('change').catch((err) => debugWarn(err))
  }
  debounceSetShowPicker(false)
  // check if modelValue change, if not change, then reset color.
  nextTick(() => {
    const newColor = new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat || '',
      value: props.modelValue,
    })
    if (!color.compare(newColor)) {
      resetColor()
    }
  })
}

function clear() {
  debounceSetShowPicker(false)
  emit(UPDATE_MODEL_EVENT, null)
  emit('change', null)
  if (props.modelValue !== null && props.validateEvent) {
    formItem?.validate('change').catch((err) => debugWarn(err))
  }
  resetColor()
}

onMounted(() => {
  if (props.modelValue) {
    customInput.value = currentColor.value
  }
})

watch(
  () => props.modelValue,
  (newVal) => {
    if (!newVal) {
      showPanelColor.value = false
    } else if (newVal && newVal !== color.value) {
      shouldActiveChange = false
      color.fromString(newVal)
    }
  }
)

watch(
  () => currentColor.value,
  (val) => {
    customInput.value = val
    shouldActiveChange && emit('activeChange', val)
    shouldActiveChange = true
  }
)

watch(
  () => color.value,
  () => {
    if (!props.modelValue && !showPanelColor.value) {
      showPanelColor.value = true
    }
  }
)

watch(
  () => showPicker.value,
  () => {
    nextTick(() => {
      hue.value?.update()
      sv.value?.update()
      alpha.value?.update()
    })
  }
)

provide(colorPickerContextKey, {
  currentColor,
})

defineExpose({
  /**
   * @description current color object
   */
  color,
})
</script>
