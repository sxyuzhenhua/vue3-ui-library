<template>
    <div class="App">
        <div class="nav">
            <div class="logo-wrap">
                <img class="logo" src="../images/logo.png" alt="">
                <span class="logo-text">Vue3 UI组件库</span>
            </div>
            <div class="nav-bar">
                <a class="nav-item" 
                :class="{
                'is-menu-link': true,
                active: isActiveLink(
                        route,
                        item.activeMatch || item.link,
                        !!item.activeMatch
                    ),
                }" 
                v-for="item in navs"  :href="item.link" :key="item.link">{{item.text}}</a>
                <Translation/>
            </div>
        </div>
        <section class="exclude-nav">
            <div class="sidebar">
                <div v-for="item in sidebars" :key="item.text">
                    <div class="sidebar-title">{{item.text}}</div>
                    <ul>
                        <li class="menu"  v-for="(child, childKey) in item.children" :key="childKey"><a :href="child.link" :class="{active: isMenuActive(route, child.link)}">{{child.text}}</a></li>
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
import { useRoute } from 'vitepress'
import { useNav } from '../composables/nav'
import { useSidebar } from '../composables/sidebar';
import Translation from './translation.vue'
import { isActiveLink, isMenuActive } from '../utils/index';

const route = useRoute()
const navs = useNav()
const { sidebars } = useSidebar();
</script>
<style>
html, body {
    padding: 0;
    margin: 0;
}
ul, li {
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
.nav {
    width: 100%;
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.logo-wrap {
    display: flex;
    align-items: center;
}
.logo {
    width: 40px;
    height: 40px;
}
.logo-text {
    color: #000000;
    font-size: 18px;
}
.nav .nav-bar {
    display:flex;
}
.nav-item {
    padding: 0 16px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 700;
}
.nav-item.active {
    color: #ef580c;
    border-bottom: 4px solid #ef580c;
}
.exclude-nav {
    display: flex;
}
.sidebar {
    width: 280px;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    border-right: 2px solid rgba(0, 0, 0, 0.1);
}
.sidebar ul .menu {
    display: flex;
    flex-direction: column;
}
.sidebar ul .menu a {
    text-decoration: none;
    line-height: 40px;
    padding-left: 20px;
    color: rgba(0, 0, 0, 0.5);
    border-left: 4px solid transparent;
}
.sidebar ul .menu a:hover, .sidebar ul .menu a.active{
    color: #ef580c;
    background-color: rgb(238, 180, 202);
    border-left: 4px solid #ef580c;
}
.sidebar-title {
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 24px;
      padding-left: 10px;
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.3);
}
.content-wrap {
    flex: 1;
    padding-left: 40px;
    box-sizing: border-box;
}
.doc-content {
    width: 80%;
}
</style>