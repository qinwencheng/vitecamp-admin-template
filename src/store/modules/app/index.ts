import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const isSideMenuCollapsed = ref(false)
  const toggleSideMenuCollapse = useToggle(isSideMenuCollapsed)
  return {
    isSideMenuCollapsed,
    toggleSideMenuCollapse,
  }
})
