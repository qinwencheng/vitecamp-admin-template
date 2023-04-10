import type { RouteRecordRaw } from 'vue-router'

// @unocss-include
export const mainRouter: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: 'dashboard',
      icon: 'i-mdi-home',
    },
    component: () => import('~/views/main/workbench.vue'),
  },
  {
    path: '/base',
    name: 'base',
    meta: {
      title: '基础功能',
      icon: 'i-majesticons-compass-line',
    },
    children: [
      {
        path: '/base1-1',
        name: 'base1-1',
        meta: {
          title: '基础组件',
          icon: 'i-material-symbols-auto-awesome-outline-rounded',
        },
        component: () => import('~/views/main/workbench.vue'),
      },
      {
        path: '/base1-2',
        name: 'base1-2',
        meta: {
          title: 'Unocss',
          icon: 'i-material-symbols-auto-awesome-outline-rounded',
        },
        component: () => import('~/views/main/workbench.vue'),
      },
      {
        path: '/base1-3',
        name: 'base1-3',
        meta: {
          title: 'KeepAlive',
          icon: 'i-material-symbols-auto-awesome-outline-rounded',
        },
        component: () => import('~/views/main/workbench.vue'),
      },
    ],
  },
  {
    path: '/sample',
    name: 'sample',
    meta: {
      title: '示例页面',
      icon: 'i-material-symbols-logo-dev-outline',
    },
    children: [
      {
        path: '/sample1-1',
        name: 'sample1-1',
        meta: {
          title: 'CRUD表格',
          icon: 'i-ic-baseline-table-view',
        },
        component: () => import('~/views/main/workbench.vue'),
      },
      {
        path: '/sample1-2',
        name: 'sample1-2',
        meta: {
          title: 'MD编辑器',
          icon: 'i-ri-markdown-line',
        },
        component: () => import('~/views/main/workbench.vue'),
      },
      {
        path: '/sample1-3',
        name: 'sample1-3',
        meta: {
          title: '富文本编辑器',
          icon: 'i-ic-sharp-text-rotation-none',
        },
        component: () => import('~/views/main/workbench.vue'),
      },
    ],
  },
  {
    path: '/link',
    name: 'link',
    meta: {
      title: '外部链接',
      icon: 'i-mdi-link-variant',
    },
    component: () => import('~/views/main/workbench.vue'),
    children: [
      {
        path: '/link1-1',
        name: 'link1-1',
        meta: {
          title: '源码-github',
          icon: 'i-mdi-github',
        },
        component: () => import('~/views/example/MarkdownPage.vue'),
      },
    ],
  },
  {
    path: '/multi-level-menus',
    name: 'multi-level-menus',
    meta: {
      title: '多级菜单',
      icon: 'i-ic-baseline-menu',
    },
    component: () => import('~/views/main/workbench.vue'),
    children: [
      {
        path: '/menu1-1',
        name: 'menu1-1',
        meta: {
          title: 'a-1',
          icon: 'i-ic-baseline-menu',
        },
        component: () => import('~/views/example/MarkdownPage.vue'),
        children: [
          {
            path: '/menu1-1-1',
            name: 'menu1-1-1',
            meta: {
              title: 'a-1-1',
              icon: 'i-ic-baseline-menu',
            },
            component: () => import('~/views/example/MarkdownPage.vue'),
          },
          {
            path: '/menu2-1',
            name: 'menu2-1',
            meta: {
              title: 'a-1-2',
              icon: 'i-ic-baseline-menu',
            },
            component: () => import('~/views/example/MarkdownPage.vue'),
          },
        ],
      },
      {
        path: '/menu2-1',
        name: 'menu2-1',
        meta: {
          title: 'a-2',
          icon: 'i-ic-baseline-menu',
        },
        component: () => import('~/views/example/MarkdownPage.vue'),
      },
    ],
  },
  {
    path: '/error-page',
    name: 'error-page',
    meta: {
      title: '错误页',
      icon: 'i-tabler-error-404',
    },
    children: [
      {
        path: '/401',
        name: '401',
        meta: {
          title: '401',
          icon: 'i-mdi-denied',
        },
        component: () => import('~/views/exception/401.vue'),
      },
      {
        path: '/404',
        name: '404',
        meta: {
          title: '404',
          icon: 'i-tabler-error-404',
        },
        component: () => import('~/views/exception/404.vue'),
      },
    ],
  },
]
