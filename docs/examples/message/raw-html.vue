<template>
  <yu-button :plain="true" @click="openHTML">Use HTML String</yu-button>
</template>

<script lang="ts" setup>
import { YuMessage } from "vue-yu-mi";

const openHTML = () => {
  YuMessage({
    dangerouslyUseHTMLString: true,
    message: "<strong>This is <i>HTML</i> string</strong>",
  });
};
</script>
