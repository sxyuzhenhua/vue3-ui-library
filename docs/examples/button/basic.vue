<template>
    <yu-row class="mb-4">
        <yu-button>Default</yu-button>
        <yu-button type="primary">Primary</yu-button>
        <yu-button type="success">Success</yu-button>
        <yu-button type="info">Info</yu-button>
        <yu-button type="warning">Warning</yu-button>
        <yu-button type="danger">Danger</yu-button>
    </yu-row>
    <yu-row class="mb-4">
        <yu-button plain>Plain</yu-button>
        <yu-button type="primary" plain>Primary</yu-button>
        <yu-button type="success" plain>Success</yu-button>
        <yu-button type="info" plain>Info</yu-button>
        <yu-button type="warning" plain>Warning</yu-button>
        <yu-button type="danger" plain>Danger</yu-button>
    </yu-row>  
    <yu-row class="mb-4">
        <yu-button round>Round</yu-button>
        <yu-button type="primary" round>Primary</yu-button>
        <yu-button type="success" round>Success</yu-button>
        <yu-button type="info" round>Info</yu-button>
        <yu-button type="warning" round>Warning</yu-button>
        <yu-button type="danger" round>Danger</yu-button>
    </yu-row>

    <yu-row>
        <yu-button :icon="Search" circle />
        <yu-button type="primary" :icon="Edit" circle />
        <yu-button type="success" :icon="Check" circle />
        <yu-button type="info" :icon="Message" circle />
        <yu-button type="warning" :icon="Star" circle />
        <yu-button type="danger" :icon="Delete" circle />
    </yu-row>
  </template>
  
  <script lang="ts" setup>
  import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
  </script>
  