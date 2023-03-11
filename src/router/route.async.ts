// 需要鉴权的业务路由
import type { RouteRecordRaw } from 'vue-router'

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('~/views/main/index.vue'),
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
