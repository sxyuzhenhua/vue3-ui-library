<template>
  <div>
    <yu-link :underline="false">Without Underline</yu-link>
    <yu-link>With Underline</yu-link>
  </div>
</template>
<style scoped>
.yu-link {
  margin-right: 8px;
}
.yu-link .yu-icon--right.yu-icon {
  vertical-align: text-bottom;
}
</style>
