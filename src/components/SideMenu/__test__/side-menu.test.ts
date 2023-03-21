import { mount } from '@vue/test-utils'
import type { RouteRecordRaw } from 'vue-router'
import SideMenu from '~/components/SideMenu/index.vue'

const itemList: Array<RouteRecordRaw> = [
  {
    path: '/dashboard1',
    name: 'dashboard1',
    meta: {
      title: 'dashboard1',
      icon: 'i-mdi-home',
    },
    component: () => import('~/views/main/workbench.vue'),
  },
  {
    path: '/dashboard2',
    name: 'dashboard2',
    meta: {
      title: 'dashboard2',
      icon: 'i-material-symbols-add-home',
    },
    component: () => import('~/views/main/workbench.vue'),
  },
  {
    path: '/dashboar3',
    name: 'dashboard3',
    meta: {
      title: 'dashboard3',
      icon: 'i-carbon-home',
    },
    component: () => import('~/views/main/workbench.vue'),
  },
]

const _mount = (template: string, options = {}) =>
  mount({
    components: {
      SideMenu,
    },
    template,
    ...options,
  })

describe('side-menu', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('create', async () => {
    const wrapper = _mount(
      '<SideMenu :item-list="itemList" />',
      {
        data() {
          return {
            itemList,
          }
        },
      },
    )

    const menuItemList = await wrapper.findAll('li.el-menu-item')

    // 成功渲染了3个菜单项
    expect(menuItemList.length).toEqual(3)

    // 渲染的文本正确
    expect(menuItemList[0].text()).toEqual('dashboard1')
    expect(menuItemList[1].text()).toEqual('dashboard2')
    expect(menuItemList[2].text()).toEqual('dashboard3')

    // 渲染的图标正确
    expect(menuItemList[0].find('i div.i-mdi-home').exists()).toBeTruthy()
    expect(menuItemList[1].find('i div.i-material-symbols-add-home').exists()).toBeTruthy()
    expect(menuItemList[2].find('i div.i-carbon-home').exists()).toBeTruthy()
  })
})
