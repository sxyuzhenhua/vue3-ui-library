<template>
  <div>
    <yu-link :icon="Edit">Edit</yu-link>
    <yu-link>
      Check<yu-icon class="yu-icon--right"><icon-view /></yu-icon>
    </yu-link>
  </div>
</template>

<script setup lang="ts">
import { Edit, View as IconView } from "@element-plus/icons-vue";
</script>

<style scoped>
.yu-link {
  margin-right: 8px;
}
</style>
