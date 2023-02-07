<template>
    <section class="theme-color">{{ text }}: &nbsp;&nbsp;&nbsp;&nbsp; <yu-color-picker v-model="majorColor"/></section>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'

defineProps({
  text: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['change'])


const rootEl = document.documentElement
const rootStyle = rootEl && getComputedStyle(rootEl)
const majorColor = ref(rootStyle ? rootStyle.getPropertyValue('--yu-color-primary') : '')

watch(majorColor, value => {
  emit('change', value);
})
</script>

<style lang="scss">
.theme-color {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>