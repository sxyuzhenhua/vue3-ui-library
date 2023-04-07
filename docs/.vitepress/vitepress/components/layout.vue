<template>
  <div class="App">
    <VPNav />
    <section class="exclude-nav">
      <div v-if="hasSidebar" class="self-sidebar">
        <div v-for="item in sidebars" :key="item.text">
          <div class="self-sidebar-title">{{ item.text }}</div>
          <ul>
            <li
              v-for="(child, childKey) in item.children"
              :key="childKey"
              class="menu"
            >
              <a
                :href="child.link"
                :class="{ active: isMenuActive(route, child.link) }"
                >{{ child.text }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="content-wrap">
        <Content class="doc-content" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vitepress";
import { useSidebar } from "../composables/sidebar";
import { isActiveLink, isMenuActive } from "../utils/index";
import VPNav from "./vp-nav.vue";
import Translation from "./translation.vue";

const route = useRoute();
const router = useRouter();

const majorColor = localStorage.getItem("--yu-color-primary");
if (majorColor) {
  document.documentElement.style.setProperty("--yu-color-primary", majorColor);
}
const { sidebars, hasSidebar } = useSidebar();
</script>
<style>
html,
body {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
.App {
  display: flex;
  flex-direction: column;
}

.exclude-nav {
  display: flex;
}
.self-sidebar {
  width: 280px;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-right: 2px solid var(--border-color);
  margin-right: 30px;
}
.self-sidebar ul .menu {
  display: flex;
  flex-direction: column;
}
.self-sidebar ul .menu a {
  text-decoration: none;
  line-height: 40px;
  padding-left: 20px;
  color: var(--text-color-light);
  border-left: 4px solid transparent;
}
.self-sidebar ul .menu a:hover,
.self-sidebar ul .menu a.active {
  color: var(--yu-color-primary);
  background-color: var(--yu-color-primary-light-7);
  border-left: 4px solid var(--yu-color-primary);
}
.self-sidebar-title {
  font-size: 12px;
  font-weight: 700;
  margin-top: 20px;
  line-height: 24px;
  padding-left: 10px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.3);
  margin-right: 40px;
}
.content-wrap {
  flex: 1;
  box-sizing: border-box;
  max-height: calc(100vh - 80px);
  overflow-y: scroll;
}
.doc-content {
  width: 100%;
}
</style>
