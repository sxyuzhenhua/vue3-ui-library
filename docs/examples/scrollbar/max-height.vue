<template>
    <yu-button @click="add">Add Item</yu-button>
    <yu-button @click="onDelete">Delete Item</yu-button>
    <yu-scrollbar max-height="400px">
      <p v-for="item in count" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </yu-scrollbar>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  const count = ref(3)
  
  const add = () => {
    count.value++
  }
  const onDelete = () => {
    if (count.value > 0) {
      count.value--
    }
  }
  </script>
  
  <style scoped>
  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--yu-color-primary-light-9);
    color: var(--yu-color-primary);
  }
  </style>
  