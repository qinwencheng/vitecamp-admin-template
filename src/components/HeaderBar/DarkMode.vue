<script setup lang="ts">
import { isDark, toggleDark } from '~/utils/dark'
</script>

<template>
  <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
    <i-ph-cloud-moon-bold v-if="isDark" />
    <i-ph-sun-horizon-bold v-else />
  </button>
</template>
