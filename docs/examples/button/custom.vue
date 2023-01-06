<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div class="flex">
    <yu-button color="#626aef" :dark="isDark">Default</yu-button>
    <yu-button color="#626aef" :dark="isDark" plain>Plain</yu-button>

    <yu-button color="#626aef" :dark="isDark" disabled>Disabled</yu-button>
    <yu-button color="#626aef" :dark="isDark" disabled plain
      >Disabled Plain</yu-button
    >
  </div>
</template>
