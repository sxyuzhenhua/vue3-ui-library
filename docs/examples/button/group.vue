<template>
  <yu-button-group>
    <yu-button type="primary" :icon="ArrowLeft">Previous Page</yu-button>
    <yu-button type="primary">
      Next Page<yu-icon class="yu-icon--right"><ArrowRight /></yu-icon>
    </yu-button>
  </yu-button-group>

  <yu-button-group class="ml-4">
    <yu-button type="primary" :icon="Edit" />
    <yu-button type="primary" :icon="Share" />
    <yu-button type="primary" :icon="Delete" />
  </yu-button-group>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Share,
} from "@element-plus/icons-vue";
</script>
