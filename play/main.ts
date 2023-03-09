import { createApp } from 'vue'
import '@yu/theme-chalk/src/dark/css-vars.scss'
import '@yu/theme-chalk/dist/index.css'
import { YuButton, YuTooltip, YuTag, YuRow, YuCol, YuColorPicker } from 'yu-element';

const coms = [
    ['YuButton', YuButton], 
    ['YuTooltip', YuTooltip], 
    ['YuTag', YuTag], 
    ['YuRow', YuRow], 
    ['YuCol', YuCol], 
    ['YuColorPicker', YuColorPicker]
]

;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  const app = createApp(App)
  coms.forEach(([name, component]) => {
    app.component(name, component);
  })
  

  app.mount('#play')
})()
