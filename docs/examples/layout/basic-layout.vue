<template>
  <yu-row>
    <yu-col :span="24"><div class="grid-content ep-bg-purple-dark" /></yu-col>
  </yu-row>
  <yu-row>
    <yu-col :span="12"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="12"><div class="grid-content ep-bg-purple-light" /></yu-col>
  </yu-row>
  <yu-row>
    <yu-col :span="8"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="8"><div class="grid-content ep-bg-purple-light" /></yu-col>
    <yu-col :span="8"><div class="grid-content ep-bg-purple" /></yu-col>
  </yu-row>
  <yu-row>
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple-light" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple-light" /></yu-col>
  </yu-row>
  <yu-row>
    <yu-col :span="4"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="4"><div class="grid-content ep-bg-purple-light" /></yu-col>
    <yu-col :span="4"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="4"><div class="grid-content ep-bg-purple-light" /></yu-col>
    <yu-col :span="4"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="4"><div class="grid-content ep-bg-purple-light" /></yu-col>
  </yu-row>
</template>

<style lang="scss">
.yu-row {
  margin-bottom: 20px;
}
.yu-row:last-child {
  margin-bottom: 0;
}
.yu-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
