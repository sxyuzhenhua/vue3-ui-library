<script lang="ts" setup>
import { getColorValue, useCopyColor } from '../../utils'

const colorsType = ['success', 'warning', 'danger', 'info']

const colorLevel = [3, 5, 7, 8, 9].map((item) => `light-${item}`)
colorLevel.unshift('dark-2')

const { copyColor } = useCopyColor()
</script>

<template>
  <yu-row :gutter="12">
    <yu-col
      v-for="(type, i) in colorsType"
      :key="i"
      :span="6"
      :xs="{ span: 12 }"
    >
      <div class="demo-color-box" :style="{ background: getColorValue(type) }">
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
        <div class="value" text="xs">
          {{ getColorValue(type).toUpperCase() }}
        </div>
        <div class="bg-color-sub">
          <div
            v-for="(level, key) in colorLevel"
            :key="key"
            class="bg-secondary-sub-item transition cursor-pointer hover:shadow"
            :style="{
              width: `${100 / 6}%`,
              background: `var(--yu-color-${type}-` + level + ')',
            }"
            @click="copyColor(type + '-' + level)"
          />
        </div>
      </div>
    </yu-col>
  </yu-row>
</template>
