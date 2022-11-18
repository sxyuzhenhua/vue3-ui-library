<template>
    <div
      v-if="visible"
      :style="backTopStyle"
      :class="ns.b()"
      @click.stop="handleClick"
    >
      <slot>
        <yu-icon :class="ns.e('icon')"><caret-top /></yu-icon>
      </slot>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// import { YuIcon } from '../../icon/src/icon.vue'
import { YuIcon } from '@yu/components/icon'
import { CaretTop } from '@element-plus/icons-vue'
// import { useNamespace } from '@yu/hooks'
import { useNamespace } from '../../../hooks/index'
import { backtopEmits, backtopProps } from './backtop'
import { useBackTop } from './use-backtop'

const COMPONENT_NAME = 'YuBacktop'

defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(backtopProps)
const emit = defineEmits(backtopEmits)

const ns = useNamespace('backtop')
const { handleClick, visible } = useBackTop(props, emit, COMPONENT_NAME)

const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))
</script>