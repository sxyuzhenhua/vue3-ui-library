<template>
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.is(`justify-${props.justify}`, justify !== 'start'), // 类名： is-justify-space-around
      ns.is(`align-${props.align}`, align !== 'top'), //
    ]"
    :style="style"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import { useNamespace } from "@yu/hooks";
import { rowContextKey } from "@yu/tokens";
import { rowProps } from "./row";
import type { CSSProperties } from "vue";

defineOptions({
  name: "YuRow",
});
const props = defineProps(rowProps);

const ns = useNamespace("row");
const gutter = computed(() => props.gutter);

provide(rowContextKey, {
  gutter,
});

const style = computed(() => {
  const styles: CSSProperties = {};
  if (!props.gutter) {
    return styles;
  }

  styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
  return styles;
});
</script>
