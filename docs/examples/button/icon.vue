<template>
  <div class="flex">
    <yu-button type="primary" :icon="Edit" />
    <yu-button type="primary" :icon="Share" />
    <yu-button type="primary" :icon="Delete" />
    <yu-button type="primary" :icon="Search">Search</yu-button>
    <yu-button type="primary">
      Upload<yu-icon class="yu-icon--right"><Upload /></yu-icon>
    </yu-button>
  </div>
</template>
<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from "@element-plus/icons-vue";
</script>
