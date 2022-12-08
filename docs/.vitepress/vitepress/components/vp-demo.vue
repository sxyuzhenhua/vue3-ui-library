<script setup lang="ts">
import { computed, getCurrentInstance, toRef, ref } from 'vue'
import { isClient, useClipboard, useToggle } from '@vueuse/core'
import { CaretTop } from '@element-plus/icons-vue'
import { useLang } from '../composables/lang'
import { usePlayground } from '../composables/use-playground'

import demoBlockLocale from '../../i18n/component/demo-block.json'

import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const vm = getCurrentInstance()!

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

// const [sourceVisible, toggleSourceVisible] = useToggle(true)
const sourceVisible = ref(false);
const lang = useLang()

const formatPathDemos = computed(() => {
  const demos = {}
  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../examples/', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})

const locale = computed(() => demoBlockLocale[lang.value])
const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const onPlaygroundClick = () => {
  const { link } = usePlayground(props.rawSource)
  if (!isClient) return
  window.open(link)
}

const copyCode = async () => {
  const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    $message.error(locale.value['copy-error'])
  }
  try {
    await copy()
    $message.success(locale.value['copy-success'])
  } catch (e: any) {
    $message.error(e.message)
  }
}
</script>

<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />

      <div class="op-btns">
        <YuTooltip :content="locale['copy-code']" :show-arrow="false">
          <YuIcon :size="16" class="op-btn" @click="copyCode">
            <i-ri-file-copy-line />
          </YuIcon>
        </YuTooltip>
        <YuTooltip :content="locale['view-source']" :show-arrow="false">
          <YuIcon :size="16" class="op-btn" @click="sourceVisible = !sourceVisible">
            <i-ri-code-line />
          </YuIcon>
        </YuTooltip>
      </div>

      <!-- <ElCollapseTransition> -->
        <SourceCode v-show="sourceVisible" :source="source" />
      <!-- </ElCollapseTransition> -->

      <Transition name="el-fade-in-linear">
        <div
          v-show="sourceVisible"
          class="example-float-control"
          @click="sourceVisible = false"
        >
          <!-- <YuIcon :size="16">
            <CaretTop />
          </YuIcon> -->
          <span>{{ locale['hide-source'] }}</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid #dcdfe6;
  border-radius: 4px;

  .op-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-top: 1px solid #dcdfe6;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
