<template>
  <component
    :is="tag"
    :id="groupId"
    :class="ns.b('group')"
    role="group"
    :aria-label="!isLabeledByFormItem ? label || 'checkbox-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem?.labelId : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, nextTick, provide, toRefs, watch } from "vue";
import { pick } from "lodash-unified";
import { UPDATE_MODEL_EVENT } from "@yu/constants";
import { debugWarn } from "@yu/utils";
import { useFormItem, useFormItemInputId, useNamespace } from "@yu/hooks";
import { checkboxGroupContextKey } from "@yu/tokens";
import { checkboxGroupEmits, checkboxGroupProps } from "./checkbox-group";
import type { CheckboxGroupValueType } from "./checkbox-group";

defineOptions({
  name: "YuCheckboxGroup",
});

const props = defineProps(checkboxGroupProps);
const emit = defineEmits(checkboxGroupEmits);
const ns = useNamespace("checkbox");

const { formItem } = useFormItem();
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
});

const changeEvent = async (value: CheckboxGroupValueType) => {
  emit(UPDATE_MODEL_EVENT, value);
  await nextTick();
  emit("change", value);
};

const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val: CheckboxGroupValueType) {
    changeEvent(val);
  },
});

provide(checkboxGroupContextKey, {
  ...pick(toRefs(props), [
    "size",
    "min",
    "max",
    "disabled",
    "validateEvent",
    "fill",
    "textColor",
  ]),
  modelValue,
  changeEvent,
});

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate("change").catch((err) => debugWarn(err));
    }
  }
);
</script>
