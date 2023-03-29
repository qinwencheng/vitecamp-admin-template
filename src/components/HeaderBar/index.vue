import { useAppStore } from '~/store/modules';

<script setup lang="ts">
import { useAppStore } from '~/store/modules'

const appStore = useAppStore()
</script>

<template>
  <div class="header-bar bg-white w-full h-full border-b border-[#eee] flex px-15px">
    <div class="left-tool flex items-center">
      <el-icon size="20" @click="appStore.toggleSideMenuCollapse()">
        <div v-if="appStore.isSideMenuCollapsed" class="i-mdi-format-indent-increase" />
        <div v-else class="i-mdi-format-indent-decrease" />
      </el-icon>
      <!-- 大于sm尺寸时display为block，否则为none -->
      <Breadcrumb class="ml-4 hidden sm:block" />
    </div>
  </div>
</template>
