<template>
  <yu-badge :value="12" class="item">
    <yu-button>comments</yu-button>
  </yu-badge>
  <yu-badge :value="3" class="item">
    <yu-button>replies</yu-button>
  </yu-badge>
  <yu-badge :value="1" class="item" type="primary">
    <yu-button>comments</yu-button>
  </yu-badge>
  <yu-badge :value="2" class="item" type="warning">
    <yu-button>replies</yu-button>
  </yu-badge>

  <yu-dropdown trigger="click">
    <span class="yu-dropdown-link">
      Click Me
      <yu-icon class="yu-icon--right"><caret-bottom /></yu-icon>
    </span>
    <template #dropdown>
      <yu-dropdown-menu>
        <yu-dropdown-item class="clearfix">
          comments
          <yu-badge class="mark" :value="12" />
        </yu-dropdown-item>
        <yu-dropdown-item class="clearfix">
          replies
          <yu-badge class="mark" :value="3" />
        </yu-dropdown-item>
      </yu-dropdown-menu>
    </template>
  </yu-dropdown>
</template>

<script lang="ts" setup>
import { CaretBottom } from "@element-plus/icons-vue";
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.yu-dropdown {
  margin-top: 1.1rem;
}
</style>
