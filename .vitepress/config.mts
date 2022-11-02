import type { UserConfig } from 'vitepress'
import { head, sidebars, nav, mdPlugin } from './config'
import { languages } from './utils/lang'

console.log('nav::::',nav);
console.log('sidebars::::',JSON.stringify(sidebars));
console.log('languages::', languages);

const buildTransformers = () => {
    const transformer = () => {
      return {
        props: [],
        needRuntime: true,
      }
    }
  
    const transformers = {}
    const directives = [
      'infinite-scroll',
      'loading',
      'popover',
      'click-outside',
      'repeat-click',
      'trap-focus',
      'mousewheel',
      'resize',
    ]
    directives.forEach((k) => {
      transformers[k] = transformer
    })
  
    return transformers
}

const locales = {}
languages.forEach((lang) => {
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})

console.log(locales);

export const config: UserConfig = {
    title: 'Vue3 UI组件库',
    description: 'a Vue 3 based component library for designers and developers',
    lastUpdated: true,
    head,
    themeConfig: {
      editLink: {
        pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      ],
      lastUpdated: 'Last Updated',
  
      logo: '/logo.png',
      logoSmall: '/logo.png',
      sidebars,
      nav,
      features: {},
      langs: languages,
    },
    locales,
    markdown: {
      config: (md) => mdPlugin(md),
    },

    vue: {
        template: {
        ssr: true,
        compilerOptions: {
            directiveTransforms: buildTransformers(),
        },
        },
    },

}
  
export default config