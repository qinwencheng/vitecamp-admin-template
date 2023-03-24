<script lang="ts" setup>
import { mainRouter } from '~/router/modules/main/index'
import SideMenu from '~/components/SideMenu/index.vue'

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const isCollapse = ref(true)
const sideWidth = computed(() => {
  return isCollapse.value ? 'w-64px' : 'w-200px'
})
const open = useToggle(isCollapse)
</script>

<template>
  <el-button @click="open()">
    open
  </el-button>
  <div class="side-menu-playground-page-container h-[calc(100vh-30px)] w-screen bg-[#f5f6fb]">
    <transition name="fade-slide" mode="out-in" appear>
      <el-container class="h-full w-full">
        <div>
          <SideMenu :item-list="mainRouter" :collapse="isCollapse" :class="sideWidth" />
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
