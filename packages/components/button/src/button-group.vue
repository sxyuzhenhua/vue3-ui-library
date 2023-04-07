<template>
  <div :class="`${ns.b('group')}`">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { provide, reactive, toRef } from "vue";
import { buttonGroupContextKey } from "@yu/tokens";
import { useNamespace } from "@yu/hooks";
import { buttonGroupProps } from "./button-group";

defineOptions({
  name: "YuButtonGroup",
});
const props = defineProps(buttonGroupProps);
provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, "size"),
    type: toRef(props, "type"),
  })
);
const ns = useNamespace("button");
</script>
