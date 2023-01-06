import YuElement from 'yu-element'

import Layout,  { globals } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
import './style.css'
import type { Theme } from 'vitepress'

export default define<Theme>({
  // root component to wrap each page
  Layout: Layout,

  // this is a Vue 3 functional component
  NotFound: () => 'custom 404',

  enhanceApp({ app }) {
    app.use(YuElement)
    globals.forEach(([name, Comp]) => {
        app.component(name, Comp)
    })
  }
})