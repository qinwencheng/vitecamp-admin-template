import type { RouteRecordRaw } from 'vue-router'

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
]
