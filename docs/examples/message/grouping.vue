<template>
  <yu-button :plain="true" @click="open">Show message</yu-button>
</template>

<script lang="ts" setup>
import { YuMessage } from "vue-yu-mi";

const open = () => {
  YuMessage({
    message: "this is a message.",
    grouping: true,
    type: "success",
  });
};
</script>
