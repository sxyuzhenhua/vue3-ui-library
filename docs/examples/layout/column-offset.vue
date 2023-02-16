<template>
    <yu-row :gutter="20">
      <yu-col :span="6"><div class="grid-content ep-bg-purple" /></yu-col>
      <yu-col :span="6" :offset="6"
        ><div class="grid-content ep-bg-purple"
      /></yu-col>
    </yu-row>
    <yu-row :gutter="20">
      <yu-col :span="6" :offset="6"
        ><div class="grid-content ep-bg-purple"
      /></yu-col>
      <yu-col :span="6" :offset="6"
        ><div class="grid-content ep-bg-purple"
      /></yu-col>
    </yu-row>
    <yu-row :gutter="20">
      <yu-col :span="12" :offset="6"
        ><div class="grid-content ep-bg-purple"
      /></yu-col>
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
  