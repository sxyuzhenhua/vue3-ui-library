<script setup lang="ts">
import { ref, watch } from 'vue';
import { isClient } from '@vueuse/core'
import Dark from '../icons/dark.vue'
import Light from '../icons/light.vue'
const rootCls = isClient ? document.documentElement.classList : undefined
const curDark = localStorage.getItem('--yu-docs-theme-dark') === 'true' ? true : false;

if(curDark) {
    rootCls!.add('dark')
} else {
    rootCls!.remove('dark')
}
const isDark = ref(curDark)


function toggleDark(value: boolean) {
  if (!isClient) return

  requestAnimationFrame(() => {

    if (value) {
      rootCls!.add('dark')
    } else {
      rootCls!.remove('dark')
    }
    
    localStorage.setItem('--yu-docs-theme-dark', String(value))
  })
}

  watch(isDark, toggleDark)
</script>

<template>
  <div class="theme-toggler-content">
    <yu-switch 
    v-model="isDark" 
    :active-icon="Dark" 
    :inactive-icon="Light"
     style="--yu-switch-on-color: #2c2c2c; --yu-switch-off-color: #f2f2f2; --yu-switch-border-color: #dcdfe6"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
.theme-toggler-content {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 10px;
}
</style>
