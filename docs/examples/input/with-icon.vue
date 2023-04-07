<template>
  <div class="demo-input-suffix">
    <yu-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Using attributes</span
      >
      <yu-input
        v-model="input1"
        class="w-50 m-2"
        placeholder="Pick a date"
        :suffix-icon="Calendar"
      />
      <yu-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
    </yu-row>
  </div>
  <div class="demo-input-suffix">
    <yu-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Using slots</span
      >
      <yu-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
        <template #suffix>
          <yu-icon class="yu-input__icon"><calendar /></yu-icon>
        </template>
      </yu-input>
      <yu-input v-model="input4" class="w-50 m-2" placeholder="Type something">
        <template #prefix>
          <yu-icon class="yu-input__icon"><search /></yu-icon>
        </template>
      </yu-input>
    </yu-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Calendar, Search } from "@element-plus/icons-vue";
const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
const input4 = ref("");
</script>
