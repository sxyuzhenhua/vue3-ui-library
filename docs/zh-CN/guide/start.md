
###  一、安装

### 1.1 使用包管理器安装
```
# Choose a package manager you like.

# NPM
$ npm install vue-yu-mi --save

# Yarn
$ yarn add vue-yu-mi

# pnpm
$ pnpm install vue-yu-mi
```

### 1.2 通过浏览器标签引入
以下是两种CDN厂商的引入方式,建议锁定版本，以免将来升级版本造成非兼容性问题

* unpkg：

```
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/vue-yu-mi/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/vue-yu-mi"></script>
</head>
```

* jsDelivr：

```
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/vue-yu-mi/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/vue-yu-mi"></script>
</head>

```

### 二、使用

#### 2.1 如果不在乎打包后的文件大小，那就完整导入
```
// main.ts
import { createApp } from 'vue'
import VueYuMi from 'vue-yu-mi'
import 'vue-yu-mi/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(VueYuMi)
app.mount('#app')
```

### Volar
如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。
```
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-yu-mi/global"]
  }
}
```

#### 2.2 按需导入
##### 2.2.1 自动导入

首先安装：
```
npm install -D unplugin-vue-components unplugin-auto-import
```


```
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { YuElementResolver } from 'VueYuMi/plugins'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [YuElementResolver()],
    }),
    Components({
      resolvers: [YuElementResolver()],
    }),
  ],
})

```

##### 2.2.2 手动导入

```
<template>
  <el-button>我是 YuButton</el-button>
</template>
<script>
  import { YuButton } from 'vue-yu-mi'
  export default {
    components: { YuButton },
  }
</script>
```

```
// vite.config.ts
import { defineConfig } from 'vite'
import YuementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  // ...
  plugins: [YuementPlus()],
})
```

### 三、国际化
默认使用英语

#### 3.1 全局配置
```
import VueYuMi from 'vue-yu-mi'
import zhCn from 'vue-yu-mi/dist/locale/zh-cn.mjs'

app.use(VueYuMi, {
  locale: zhCn,
})
```

#### 3.2 ConfigProvider 配置

```
<template>
  <el-config-provider :locale="locale">
    <app />
  </el-config-provider>
</template>

<script>
  import { defineComponent } from 'vue'
  import { YuConfigProvider } from 'vue-yu-mi'

  import zhCn from 'vue-yu-mi/dist/locale/zh-cn.mjs'

  export default defineComponent({
    components: {
      YuConfigProvider,
    },
    setup() {
      return {
        locale: zhCn,
      }
    },
  })
</script>
```

#### 国际化 -- CDN 用法

```
<script src="//unpkg.com/vue-yu-mi/dist/locale/zh-cn"></script>
<script>
  app.use(YuementPlus, {
    locale: YuementPlusLocaleZhCn,
  })
</script>
```