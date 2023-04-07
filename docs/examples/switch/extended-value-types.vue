<template>
  <yu-tooltip :content="'Switch value: ' + value" placement="top">
    <yu-switch
      v-model="value"
      style="--yu-switch-on-color: #13ce66; --yu-switch-off-color: #ff4949"
      active-value="100"
      inactive-value="0"
    />
  </yu-tooltip>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("100");
</script>
