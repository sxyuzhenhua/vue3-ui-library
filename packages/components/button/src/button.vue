<template>
    <button
    style="background-color: pink;"
    >
      <slot></slot>
    </button>
  </template>
  
  <script lang="ts" setup>
  
  defineOptions({
    name: 'YuButton',
  })
  </script>
  