<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { mainRouter } from '~/router/modules/main/index'
// import SideMenu from '~/components/SideMenu/index.vue'
import SideBar from '~/components/SideBar/index.vue'
import { useAppStore } from '~/store/modules'

const appStore = useAppStore()
const { isSideMenuCollapsed } = storeToRefs(appStore)

const sideWidth = computed(() => {
  return isSideMenuCollapsed.value ? 'w-64px' : 'w-220px'
})
</script>

<template>
  <div class="side-menu-playground-page-container h-[calc(100vh-30px)] w-screen bg-[#f5f6fb]">
    <transition name="fade-slide" mode="out-in" appear>
      <el-container class="h-full w-full">
        <div class="left-panel bg-[#fff] border-r border-solid" :class="sideWidth">
          <SideBar :item-list="mainRouter" :collapse="isSideMenuCollapsed" />
          <!-- <SideLogo />
          <SideMenu :item-list="mainRouter" :collapse="isSideMenuCollapsed" /> -->
        </div>

        <div class="right-panel w-full h-full">
          <header class="h-60px w-full">
            <HeaderBar />
          </header>
          <section class="tab-bar h-50px bg-[#fff] flex items-center ">
            <TagsBar />
          </section>
          <el-main class="bg-[#f5f6fb]">
            <div class="main w-full h-full">
              <RouterView />
            </div>
          </el-main>
        </div>
      </el-container>
    </transition>
  </div>
</template>
