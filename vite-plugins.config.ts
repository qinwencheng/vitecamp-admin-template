import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import Unocss from 'unocss/vite'
import svgLoader from 'vite-svg-loader'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {
  ElementPlusResolver,
  VueUseComponentsResolver,
} from 'unplugin-vue-components/resolvers'
import Markdown from 'vite-plugin-vue-markdown'
import Prism from 'markdown-it-prism'
import Inspect from 'vite-plugin-inspect'
import Inspector from 'vite-plugin-vue-inspector'
import LinkAttributes from 'markdown-it-link-attributes'
import Pages from 'vite-plugin-pages'
import type { ConfigEnv } from 'vite'

const defaultClasses = 'prose prose-sm m-auto text-left'

export default (env: ConfigEnv) => {
  return [
    VueMacros({
      plugins: {
        vue: vue({
          include: [/\.vue$/, /\.md$/],
        }),
        vueJsx: vueJsx(),
      },
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),
    svgLoader(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/core',
        '@vueuse/head',
        'vitest',
      ],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
      ],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: 'src/components.d.ts',
      extensions: ['vue', 'md', 'jsx', 'tsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.vue\?v=/, /\.[jt]sx$/, /\.md$/],
      // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
          // directives: true,
        }),
        IconsResolver(),
        VueUseComponentsResolver(),
      ],
    }),
    Unocss(),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    // Inspect the intermediate state of Vite plugins. Useful for debugging and authoring plugins.
    Inspect(),

    // https://github.com/webfansplz/vite-plugin-vue-inspector
    // A vite plugin which provides the ability that to jump to the local IDE
    // when you click the element of browser automatically.It supports Vue2 & 3 & SSR.
    Inspector({
      toggleButtonVisibility: 'never',
    }),
    Markdown({
      wrapperClasses: defaultClasses,
      headEnabled: false,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        // 为 md 中的所有链接设置为 新页面跳转
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
  ]
}
