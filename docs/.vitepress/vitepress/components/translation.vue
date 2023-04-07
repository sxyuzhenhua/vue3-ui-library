<template>
  <ClientOnly>
    <yu-dropdown>
      <span class="language">{{ homeLang["language"] }}</span>
      <template #dropdown>
        <yu-dropdown-menu>
          <yu-dropdown-item
            v-for="l in langs"
            :key="l"
            @click="switchLang(l)"
            >{{ l }}</yu-dropdown-item
          >
        </yu-dropdown-menu>
      </template>
    </yu-dropdown>
  </ClientOnly>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useTranslation } from "../composables/translation";
import { useLang } from "../composables/lang";
import homeLocale from "../../i18n/pages/home.json";
const { langs, switchLang } = useTranslation();

const lang = useLang();
const homeLang = computed(() => homeLocale[lang.value]);
const isShow = ref(false);
</script>

<style scoped>
.language {
  font-weight: 700;
  cursor: pointer;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
}
.language-shadow {
  position: absolute;
  width: 100%;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
  background-color: #fff;
  z-index: 100;
}
.lang {
  line-height: 30px;
  height: 30px;
}
</style>
