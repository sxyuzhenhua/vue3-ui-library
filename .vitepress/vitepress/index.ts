
import './styles/index.scss'
import VPDemo from './components/vp-demo.vue'

import type { Component } from 'vue'

// export { default as NotFound } from './components/vp-not-found.vue'

export const globals: [string, Component][] = [
  ['Demo', VPDemo],
]
