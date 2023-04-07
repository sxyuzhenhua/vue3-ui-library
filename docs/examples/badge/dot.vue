<template>
  <yu-badge is-dot class="item">query</yu-badge>
  <yu-badge is-dot class="item">
    <yu-button class="share-button" :icon="Share" type="primary" />
  </yu-badge>
</template>

<script lang="ts" setup>
import { Share } from "@element-plus/icons-vue";
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
