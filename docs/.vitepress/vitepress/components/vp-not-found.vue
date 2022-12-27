<script setup lang="ts">
import { computed } from 'vue'
import { useLang } from '../composables/lang'
import localeData from '../../i18n/pages/not-found.json'

const lang = useLang()

const locale = computed(() => localeData[lang.value])

const goHome = () => {
  window.location.href = `/${lang.value}/`
}
</script>

<template>
  <yu-result icon="error" :title="locale.title" :sub-title="locale.desc">
    <template #extra>
      <yu-button @click="goHome">{{ locale['button-title'] }}</yu-button>
    </template>
  </yu-result>
</template>

<style scoped>
.yu-result {
  height: 100vh;
  width: 100vw;
}
</style>
