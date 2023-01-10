<template>
    <div>
      <yu-input v-model="input1" placeholder="Please input">
        <template #prepend>Http://</template>
      </yu-input>
    </div>
    <div class="mt-4">
      <yu-input v-model="input2" placeholder="Please input">
        <template #append>.com</template>
      </yu-input>
    </div>
    <div class="mt-4">
      <yu-input
        v-model="input3"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <!-- <yu-select v-model="select" placeholder="Select" style="width: 115px">
            <yu-option label="Restaurant" value="1" />
            <yu-option label="Order No." value="2" />
            <yu-option label="Tel" value="3" />
          </yu-select> -->
        </template>
        <template #append>
          <yu-button :icon="Search" />
        </template>
      </yu-input>
    </div>
    <div class="mt-4">
      <yu-input
        v-model="input3"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <yu-button :icon="Search" />
        </template>
        <template #append>
          <!-- <yu-select v-model="select" placeholder="Select" style="width: 115px">
            <yu-option label="Restaurant" value="1" />
            <yu-option label="Order No." value="2" />
            <yu-option label="Tel" value="3" />
          </yu-select> -->
        </template>
      </yu-input>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  const input1 = ref('')
  const input2 = ref('')
  const input3 = ref('')
  const select = ref('')
  </script>
  
  <style>
  .input-with-select .yu-input-group__prepend {
    background-color: var(--yu-fill-color-blank);
  }
  </style>
  