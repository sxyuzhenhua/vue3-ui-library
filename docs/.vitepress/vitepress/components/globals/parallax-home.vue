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

function refreshWave() {
  wave.value?.refresh()
}

</script>
<template>
    <section class="home-page">
        <div class="wave-container">
            <Wave ref="wave"></Wave>
            <div class="real-content">
                <img class="pic" src="../../images/logo.svg" alt="">
                <h2 class="title">Yu Element</h2>
                <div class="desc">基于vue3的UI组件库</div>
                <section class="btn-container">
                    <yu-button size="large" type="primary">{{ homeLang['start-btn'] }}</yu-button>
                    <yu-button size="large" type="info">{{ homeLang['component-btn'] }}</yu-button>    
                </section>
            </div>
        </div>
       <MainColor :text="homeLang['change-theme']" @change="refreshWave"/>
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
                display: block;
                width: 200px;
                margin: 0 auto;
            }
        }
        .title {
            font-weight: 300;
            display: flex;
            justify-content: center;
            font-weight: 700;
            font-size: 34px;
            font-family: "PingFangSC-Semibold, Microsoft YaHei, Arial -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji";
        }
        .desc {
            font-size: 20px;
            text-align: center;
            color: #495057;
            line-height: 1.2;
            margin-bottom: 30px;
            font-family: "PingFangSC-Semibold, Microsoft YaHei, Arial -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji";
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
            justify-content: center;
            margin: 0 auto;
            margin-bottom: 10px;
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