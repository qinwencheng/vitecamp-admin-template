<script setup lang="ts">
const handleLinkClick = () => {
  window.open('https://github.com/qinwencheng/vitecamp-admin-template')
}
</script>

<template>
  <button class="icon-btn mx-2 !outline-none" @click="handleLinkClick">
    <i-mdi-github />
  </button>
</template>
