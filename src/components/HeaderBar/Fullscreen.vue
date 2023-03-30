<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <button class="icon-btn mx-2 !outline-none" @click="toggle()">
    <i-ant-design-fullscreen-exit-outlined v-if="isFullscreen" />
    <i-ant-design-fullscreen-outlined v-else />
  </button>
</template>
