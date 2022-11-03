
import './styles/index.scss'
import VPDemo from './components/vp-demo.vue'
import Layout from './components/theme.vue'

import type { Component } from 'vue'

export default Layout;

// export { default as NotFound } from './components/vp-not-found.vue'

export const globals: [string, Component][] = [
  ['Demo', VPDemo],
]
