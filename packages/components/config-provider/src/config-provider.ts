import { defineComponent, renderSlot, watch } from 'vue'
import { buildProps, definePropType } from '@yu/utils'
import { provideGlobalConfig, useSizeProp } from '@yu/hooks'

import type { ExtractPropTypes } from 'vue'
import type { ExperimentalFeatures } from '@yu/tokens'
import type { Language } from '@yu/locale'
import type { ButtonConfigContext } from '@yu/components/button'
import type { MessageConfigContext } from '@yu/components/message'

export const messageConfig: MessageConfigContext = {}

export const configProviderProps = buildProps({
  // Controlling if the users want a11y features.
  a11y: {
    type: Boolean,
    default: true,
  },

  locale: {
    type: definePropType<Language>(Object),
  },

  size: useSizeProp,

  button: {
    type: definePropType<ButtonConfigContext>(Object),
  },

  experimentalFeatures: {
    type: definePropType<ExperimentalFeatures>(Object),
  },

  // Controls if we should handle keyboard navigation
  keyboardNavigation: {
    type: Boolean,
    default: true,
  },

  message: {
    type: definePropType<MessageConfigContext>(Object),
  },

  zIndex: Number,

  namespace: {
    type: String,
    default: 'yu',
  },
} as const)
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>

const ConfigProvider = defineComponent({
  name: 'YuConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    watch(
      () => props.message,
      (val) => {
        Object.assign(messageConfig, val ?? {})
      },
      { immediate: true, deep: true }
    )
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>

export default ConfigProvider
