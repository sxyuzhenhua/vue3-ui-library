<template>
  <yu-select v-model="value" placeholder="Select">
    <yu-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label"
    >
      <yu-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </yu-option-group>
  </yu-select>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
const options = [
  {
    label: "Popular cities",
    options: [
      {
        value: "Shanghai",
        label: "Shanghai",
      },
      {
        value: "Beijing",
        label: "Beijing",
      },
    ],
  },
  {
    label: "City name",
    options: [
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
      {
        value: "Dalian",
        label: "Dalian",
      },
    ],
  },
];
</script>
