<template>
  <yu-row class="row-bg">
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple-light" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
  </yu-row>
  <yu-row class="row-bg" justify="center">
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple-light" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
  </yu-row>
  <yu-row class="row-bg" justify="end">
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple-light" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
  </yu-row>
  <yu-row class="row-bg" justify="space-between">
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple-light" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
  </yu-row>
  <yu-row class="row-bg" justify="space-around">
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple-light" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
  </yu-row>
  <yu-row class="row-bg" justify="space-evenly">
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple-light" /></yu-col>
    <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
  </yu-row>
</template>

<style>
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
