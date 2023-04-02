<script setup lang="ts">
import { useAppStore } from '~/store/modules'

const appStore = useAppStore()
</script>

<template>
  <button class="icon-btn !outline-none" @click="appStore.toggleSideMenuCollapse()">
    <i-mdi-format-indent-increase v-if="appStore.isSideMenuCollapsed" class="" />
    <i-mdi-format-indent-decrease v-else />
  </button>
</template>
