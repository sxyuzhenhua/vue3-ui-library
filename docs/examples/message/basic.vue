<template>
    <yu-button :plain="true" @click="open">Show message</yu-button>
    <yu-button :plain="true" @click="openVn">VNode</yu-button>
  </template>
  
  <script lang="ts" setup>
  import { h } from 'vue'
  import { YuMessage } from 'yu-element'
  
  const open = () => {
    YuMessage('this is a message.')
  }
  
  const openVn = () => {
    YuMessage({
      message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode'),
      ]),
    })
  }
  </script>
  