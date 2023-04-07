<template>
  <yu-row :gutter="10">
    <yu-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content ep-bg-purple"
    /></yu-col>
    <yu-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content ep-bg-purple-light"
    /></yu-col>
    <yu-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content ep-bg-purple"
    /></yu-col>
    <yu-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content ep-bg-purple-light"
    /></yu-col>
  </yu-row>
</template>

<style>
.yu-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
