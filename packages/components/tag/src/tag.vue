<template>
  <span
    v-if="disableTransitions"
    :class="classes"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <span :class="ns.e('content')">
      <slot />
    </span>
    <yu-icon v-if="closable" :class="ns.e('close')" @click.stop="handleClose">
      <Close />
    </yu-icon>
  </span>
  <transition v-else :name="`${ns.namespace.value}-zoom-in-center`" appear>
    <span
      :class="classes"
      :style="{ backgroundColor: color }"
      @click="handleClick"
    >
      <span :class="ns.e('content')">
        <slot />
      </span>
      <yu-icon v-if="closable" :class="ns.e('close')" @click.stop="handleClose">
        <Close />
      </yu-icon>
    </span>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import YuIcon from "@yu/components/icon";
import { useNamespace, useSize } from "@yu/hooks";
import { Close } from "@element-plus/icons-vue";

import { tagEmits, tagProps } from "./tag";

defineOptions({
  name: "YuTag",
});
const props = defineProps(tagProps);
const emit = defineEmits(tagEmits);

const tagSize = useSize();
const ns = useNamespace("tag");
const classes = computed(() => {
  const { type, hit, effect, closable, round } = props;
  return [
    ns.b(),
    ns.is("closable", closable),
    ns.m(type),
    ns.m(tagSize.value),
    ns.m(effect),
    ns.is("hit", hit),
    ns.is("round", round),
  ];
});

// methods
const handleClose = (event: MouseEvent) => {
  emit("close", event);
};

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>
