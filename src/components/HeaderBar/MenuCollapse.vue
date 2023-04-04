<script setup lang="ts">
import { useAppStore } from '~/store/modules'

const appStore = useAppStore()
</script>

<template>
  <button class="icon-btn !outline-none text-xl" @click="appStore.toggleSideMenuCollapse()">
    <i-mdi-format-indent-increase v-if="appStore.isSideMenuCollapsed" class="w-1em h-1em" />
    <i-mdi-format-indent-decrease v-else class="w-1em h-1em" />
  </button>
</template>
