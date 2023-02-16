<template>
    <div class="play-container">
      <!-- <yu-button>test</yu-button>
      <div v-loading="true" /> -->
    <yu-row>
        <yu-col :span="6"><div style="background: red">111</div></yu-col>
        <yu-col :span="6"><div style="background: red">111</div></yu-col>
        <yu-col :span="6"><div style="background: red">111</div></yu-col>
        <yu-col :span="6"><div style="background: red">111</div></yu-col>
    </yu-row>
    </div>
</template>
  
  <script setup lang="ts">
  // code here
  </script>
  
  <style lang="scss">
  html,
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    #play {
      height: 100%;
      width: 100%;
      .play-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  </style>
  