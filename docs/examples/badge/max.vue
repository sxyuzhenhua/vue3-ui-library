<template>
  <yu-badge :value="200" :max="99" class="item">
    <yu-button>comments</yu-button>
  </yu-badge>
  <yu-badge :value="100" :max="10" class="item">
    <yu-button>replies</yu-button>
  </yu-badge>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
