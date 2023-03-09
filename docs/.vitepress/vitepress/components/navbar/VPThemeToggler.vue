<script setup lang="ts">
</script>

<template>
  <div class="theme-toggler-content">
    theme
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
.theme-toggler-content {
  @include with-bg;
  background-color: transparent;
  display: none;
  border-radius: 50%;
  height: 24px;
  padding: 0 12px;

  @include respond-to('md') {
    display: flex;
    align-items: center;
  }
}
</style>
