<template>
  <yu-button :plain="true" @click="open">Show message</yu-button>
</template>

<script lang="ts" setup>
import { YuMessage } from "yu-element";

const open = () => {
  YuMessage({
    message: "this is a message.",
    grouping: true,
    type: "success",
  });
};
</script>
