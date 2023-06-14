### Usage

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
```
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-yu-mi/global"]
  }
}
```
