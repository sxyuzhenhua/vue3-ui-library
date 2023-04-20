###  Installation

###  Installation
```
# Choose a package manager you like.

# NPM
$ npm install vue-yu-mi --save

# Yarn
$ yarn add vue-yu-mi

# pnpm
$ pnpm install vue-yu-mi
```

### Import in Browser

#### unpkg

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

#### jsDelivr

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

### Usage

```
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'vue-yu-mi'
import 'vue-yu-mi/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

### Volar
```
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-yu-mi/global"]
  }
}
```

### 