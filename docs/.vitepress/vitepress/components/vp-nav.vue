<script setup lang="ts">
import VPThemeToggler from './navbar/VPThemeToggler.vue'
import { useRoute } from 'vitepress'
import { useNav } from '../composables/nav'
import { isActiveLink, isMenuActive } from '../utils/index';
const { navs, jumpHome } = useNav()

const route = useRoute()



</script>

<template>

<div class="nav">
    <div class="logo-wrap">
        <img class="logo" src="../images/logo.svg" alt="" @click="jumpHome()">
        <span class="logo-text">Yu Element</span>
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
        <VPThemeToggler class="theme-toggler" />
        <Translation/>
    </div>
</div>
</template>

<style>
.nav {
    width: 100%;
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    border-bottom: 1px solid var(--border-color);
}
.logo-wrap {
    display: flex;
    align-items: center;
}
.logo {
    width: 40px;
    height: 40px;
    cursor: pointer;
}
.logo-text {
    color: #212529;
    font-size: 18px;
    margin-left: 10px;
}
.nav .nav-bar {
    display:flex;
}
.nav-item {
    padding: 0 16px;
    text-decoration: none;
    font-weight: 700;
    color: var(--text-color-light);
}
.nav-item:hover{
    color: var(--yu-color-primary);
    border-bottom: 4px solid  var(--yu-color-primary);
}
.nav-item.active {
    color: var(--yu-color-primary);
    border-bottom: 4px solid  var(--yu-color-primary);
}
</style>
