<template>
  <yu-switch v-model="value1" />
  <yu-switch
    v-model="value2"
    class="ml-2"
    style="--yu-switch-on-color: #13ce66; --yu-switch-off-color: #ff4949"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(true);
</script>
