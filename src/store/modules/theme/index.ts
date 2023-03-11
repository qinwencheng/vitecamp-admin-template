import { defineStore } from 'pinia'

export const theme = defineStore('theme', {
  state: () => {
    return {
      themeType: '亮蓝色',
      themeColor: '#2080F0FF',
    }
  },
  // 等同于vuex的getter
  getters: {
    getThemeType: state => state.themeType,
    getThemeColor: state => state.themeColor,
  },
  // pinia 放弃了 mutations 只使用 actions
  actions: {
    // actions可以用async做成异步形式
    setThemeType(type: string) {
      this.themeType = type
    },
  },
})

// export default theme
