<script setup lang="ts">
import { computed } from "vue";
import { useLang } from "../composables/lang";
import localeData from "../../i18n/pages/not-found.json";
import Home from "./icons/home.vue";

const lang = useLang();

const locale = computed(() => localeData[lang.value]);

const goHome = () => {
  window.location.href = `/${lang.value}/`;
};
</script>

<template>
  <div class="not-fount-container">
    <h3 class="not-title">404</h3>
    <yu-icon class="back-home" :size="80" @click="goHome"><Home /></yu-icon>
  </div>
</template>

<style scoped>
.not-fount-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
}
.not-title {
  font-size: 100px;
  font-weight: 400;
  margin-bottom: 20px;
}
.back-home {
  width: 300px;
  cursor: pointer;
}
</style>
