<script lang="ts" setup>
defineProps<{
  version: string;
}>();
</script>

<template>
  <yu-tag size="small" effect="plain" hit round>
    {{ version }}
  </yu-tag>
</template>
