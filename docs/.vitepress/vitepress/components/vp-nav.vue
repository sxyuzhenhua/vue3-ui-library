<script setup lang="ts">
import { useRoute } from 'vitepress'
import { useNav } from '../composables/nav'
import { useLang } from '../composables/lang'
import { isActiveLink, isMenuActive } from '../utils/index';
const { navs, jumpHome } = useNav()

const route = useRoute()



</script>

<template>

<div class="nav">
    <div class="logo-wrap">
        <img class="logo" src="../images/logo.png" alt="" @click="jumpHome()">
        <!-- <span class="logo-text">Vue3 UI组件库</span> -->
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
</style>
