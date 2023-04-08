<template>
  <yu-button :plain="true" @click="open1">message</yu-button>
  <yu-button :plain="true" @click="open2">success</yu-button>
  <yu-button :plain="true" @click="open3">warning</yu-button>
  <yu-button :plain="true" @click="open4">error</yu-button>
</template>

<script lang="ts" setup>
import { YuMessage } from "vue-yu-mi";

const open1 = () => {
  YuMessage({
    showClose: true,
    message: "This is a message.",
  });
};
const open2 = () => {
  YuMessage({
    showClose: true,
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  YuMessage({
    showClose: true,
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  YuMessage({
    showClose: true,
    message: "Oops, this is a error message.",
    type: "error",
  });
};
</script>
