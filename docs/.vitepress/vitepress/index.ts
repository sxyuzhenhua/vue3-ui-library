
import './styles/index.scss'

// for dev
// reset
import '../../../packages/theme-chalk/src/reset.scss'
import '../../../packages/theme-chalk/src/index.scss'
// for dark mode
import '../../../packages/theme-chalk/src/dark/css-vars.scss'


import VPDemo from './components/vp-demo.vue'
import Layout from './components/theme.vue'

import type { Component } from 'vue'

export { default as NotFound } from './components/vp-not-found.vue'

export default Layout;

// export { default as NotFound } from './components/vp-not-found.vue'

export const globals: [string, Component][] = [
  ['Demo', VPDemo],
]
