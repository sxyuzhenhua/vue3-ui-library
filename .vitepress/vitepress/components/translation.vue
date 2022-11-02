<template>
    <div class="language">
        <span @click="isShow=!isShow">语言</span>
        <section class="language-shadow" v-show="isShow">
            <div class="lang" v-for="l in langs" :key="l" @click="switchLang(l)">{{l}}</div>
        </section>
    </div>
</template>
<script setup lang="ts">
import { useTranslation } from '../composables/translation'
import { reactive, ref } from 'vue';
const { langs, switchLang } = useTranslation();
const isShow = ref(false)

</script>

<style scoped>
.language {
    width: 100px;
    color: #69b907;
    cursor: pointer;
    position: relative;
    text-align: center;
}
.language-shadow {
    position: absolute;
    width: 100%;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.4);
    background-color: #fff;
}
.lang {
    line-height: 30px;
    height: 30px;
}
</style>