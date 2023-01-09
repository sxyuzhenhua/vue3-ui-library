<template>
    <yu-button plain @click="openCenter">Centered text</yu-button>
  </template>
  
  <script lang="ts" setup>
  import { YuMessage } from 'yu-element'
  
  const openCenter = () => {
    YuMessage({
      showClose: true,
      message: 'Centered text',
      center: true,
    })
  }
  </script>
  