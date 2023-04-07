<template>
  <yu-select v-model="value" placeholder="Select">
    <yu-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span
        style="
          float: right;
          color: var(--yu-text-color-secondary);
          font-size: 13px;
        "
        >{{ item.value }}</span
      >
    </yu-option>
  </yu-select>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
const cities = [
  {
    value: "Beijing",
    label: "Beijing",
  },
  {
    value: "Shanghai",
    label: "Shanghai",
  },
  {
    value: "Nanjing",
    label: "Nanjing",
  },
  {
    value: "Chengdu",
    label: "Chengdu",
  },
  {
    value: "Shenzhen",
    label: "Shenzhen",
  },
  {
    value: "Guangzhou",
    label: "Guangzhou",
  },
];
</script>
