<template>
  <yu-input v-model="input" disabled placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
