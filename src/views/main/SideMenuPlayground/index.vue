<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { mainRouter } from '~/router/modules/main/index'
import SideMenu from '~/components/SideMenu/index.vue'
import { useAppStore } from '~/store/modules'

const appStore = useAppStore()
const { isSideMenuCollapsed } = storeToRefs(appStore)
const { toggleSideMenuCollapse } = appStore

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

const sideWidth = computed(() => {
  return isSideMenuCollapsed.value ? 'w-64px' : 'w-220px'
})
</script>

<template>
  <el-button @click="toggleSideMenuCollapse()">
    open
  </el-button>
  <div class="side-menu-playground-page-container h-[calc(100vh-30px)] w-screen bg-[#f5f6fb]">
    <transition name="fade-slide" mode="out-in" appear>
      <el-container class="h-full w-full">
        <div :class="sideWidth">
          <SideLogo />
          <SideMenu :item-list="mainRouter" :collapse="isSideMenuCollapsed" />
        </div>
        <el-main>
          <section class="h-full w-full bg-[#f5f6fb]">
            <div class="main w-full h-full bg-red">
              <RouterView />
            </div>
          </section>
        </el-main>
      </el-container>
    </transition>
  </div>
</template>
