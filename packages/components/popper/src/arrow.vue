<template>
  <span ref="arrowRef" :class="ns.e('arrow')" data-popper-arrow="" />
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount, watch } from "vue";
import { useNamespace } from "@yu/hooks";
import { POPPER_CONTENT_INJECTION_KEY } from "@yu/tokens";
import { popperArrowProps } from "./arrow";

defineOptions({
  name: "YuPopperArrow",
  inheritAttrs: false,
});

const props = defineProps(popperArrowProps);

const ns = useNamespace("popper");
const { arrowOffset, arrowRef } = inject(
  POPPER_CONTENT_INJECTION_KEY,
  undefined
)!;

watch(
  () => props.arrowOffset,
  (val) => {
    arrowOffset.value = val;
  }
);
onBeforeUnmount(() => {
  arrowRef.value = undefined;
});

defineExpose({
  /**
   * @description Arrow element
   */
  arrowRef,
});
</script>
