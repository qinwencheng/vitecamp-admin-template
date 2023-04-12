<script setup lang="ts">
import { useAppStore } from '~/store/modules/index'

const appStore = useAppStore()
const title = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <div class="w-full">
    <router-link class="h-15 flex items-center justify-center" to="/">
      <div class="i-tabler-layout-dashboard text-9 text-[var(--el-color-primary)]" />
      <h2 v-show="!appStore.isSideMenuCollapsed" class="ml-2.5 text-[var(--el-color-primary)] text-6 font-bold max-w-35 flex-shrink-0">
        {{ title }}
      </h2>
    </router-link>
  </div>
</template>
