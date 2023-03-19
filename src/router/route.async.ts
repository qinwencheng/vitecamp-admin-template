// 需要鉴权的业务路由
import type { RouteRecordRaw } from 'vue-router'
import { mainRouter } from './modules/main'

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    meta: {
      title: 'main',
      icon: '',
    },
    component: () => import('~/views/main/index.vue'),
    children: mainRouter,
  },
  {
    path: '/process',
    name: 'process',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('~/views/example/MarkdownPage.vue'),
  },
]

export default asyncRoutes
