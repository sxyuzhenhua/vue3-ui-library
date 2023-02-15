<template>
  <yu-focus-group-collection>
    <yu-roving-focus-group-impl v-bind="$attrs">
      <slot />
    </yu-roving-focus-group-impl>
  </yu-focus-group-collection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import YuRovingFocusGroupImpl from './roving-focus-group-impl.vue'
import { YuCollection as YuFocusGroupCollection } from './roving-focus-group'

export default defineComponent({
  name: 'YuRovingFocusGroup',
  components: {
    YuFocusGroupCollection,
    YuRovingFocusGroupImpl,
  },
})
</script>
