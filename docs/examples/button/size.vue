<template>
  <yu-row>
    <yu-button size="large">Large</yu-button>
    <yu-button>Default</yu-button>
    <yu-button size="small">Small</yu-button>
    <yu-button size="large" :icon="Search">Search</yu-button>
    <yu-button :icon="Search">Search</yu-button>
    <yu-button size="small" :icon="Search">Search</yu-button>
  </yu-row>
  <yu-row class="my-4">
    <yu-button size="large" round>Large</yu-button>
    <yu-button round>Default</yu-button>
    <yu-button size="small" round>Small</yu-button>
    <yu-button size="large" :icon="Search" round>Search</yu-button>
    <yu-button :icon="Search" round>Search</yu-button>
    <yu-button size="small" :icon="Search" round>Search</yu-button>
  </yu-row>
  <yu-row>
    <yu-button :icon="Search" size="large" circle />
    <yu-button :icon="Search" circle />
    <yu-button :icon="Search" size="small" circle />
  </yu-row>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>
