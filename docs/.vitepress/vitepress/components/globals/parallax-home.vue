<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'
import Wave from './wave.vue'
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])

const wave = ref<InstanceType<typeof Wave>>()
const waveTop = ref(494)

</script>
<template>
    <section class="home-page">
        <div class="wave-container">
            <div class="wave-block"></div>
            <Wave ref="wave"></Wave>
            <div class="real-content">
                <img src="../../images/jimu.png" alt="">
                <h2 class="title">Yu Element</h2>
            </div>
        </div>
        <section class="btn-container">
            <div class="home-btn start-btn">{{ homeLang['start-btn'] }}</div>
            <div class="home-btn browser-btn">{{ homeLang['component-btn'] }}</div>    
        </section>
        <section>{{ homeLang['change-theme'] }}</section>
    </section>
</template>

<style lang="scss">
.home-page {
    .wave-container {
        width: 100%;
        position: relative;
        .wave-block {
            width: 100%;
            height: 490px;
            background-image: linear-gradient(to bottom,transparent, pink);
        }
        .real-content {
            position: absolute;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
        }
        .title {
            text-align: center;
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
            background-color: pink;
            border: 1px solid rgba(0, 0, 0, 0.3);
        }
        .browser-btn {
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.3);
            margin-left: 20px;
        }
}
</style>