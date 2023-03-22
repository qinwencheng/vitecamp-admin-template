<script lang="ts" setup>
import { mainRouter } from '~/router/modules/main/index'
import SideMenu from '~/components/SideMenu/index.vue'

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>

<template>
  <div class="side-menu-playground-page-container h-[calc(100vh-30px)] w-screen">
    <transition name="fade-slide" mode="out-in" appear>
      <el-container class="h-full w-full">
        <el-aside width="200px">
          <SideMenu :item-list="mainRouter" />
        </el-aside>
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
