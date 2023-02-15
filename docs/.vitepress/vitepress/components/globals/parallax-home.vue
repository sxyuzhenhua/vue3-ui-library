<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import MainColor from './main-color.vue'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'
import Wave from './wave.vue'
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])


const wave = ref<InstanceType<typeof Wave>>()
const waveTop = ref(494)

function changeMainColor() {
    wave.value?.refresh()
}

</script>
<template>
    <section class="home-page">
        <div class="wave-container">
            <Wave ref="wave"></Wave>
            <div class="real-content">
                <img class="pic" src="../../images/logo.png" alt="">
                <h2 class="title">Yu Element</h2>
                <section class="btn-container">
                    <div class="home-btn start-btn">{{ homeLang['start-btn'] }}</div>
                    <div class="home-btn browser-btn">{{ homeLang['component-btn'] }}</div>    
                </section>
            </div>
        </div>
       <MainColor :text="homeLang['change-theme']" @change="changeMainColor"/>
    </section>
</template>

<style lang="scss">
.home-page {
    .wave-container {
        width: 100%;
        position: relative;
        .real-content {
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            .pic {
                width: 300px;
            }
        }
        .title {
            font-weight: 300;
            display: flex;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        }
    }
        .home-btn {
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0 20px;
            border-radius: 6px;
        }
        .btn-container {
            width: 290px;
            display: flex;
            margin: 0 auto;
        }
        .start-btn {
            background-color: var(--yu-color-primary);
            border: 1px solid rgba(0, 0, 0, 0.3);
            color: #fff;
        }
        .browser-btn {
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.3);
            margin-left: 20px;
        }
}
</style>