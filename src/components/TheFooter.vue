<script setup lang="ts">
import { isDark, toggleDark } from '~/utils/dark'
</script>

<template>
  <div class="text-center">
    <el-tooltip content="(home)" placement="top">
      <router-link class="icon-btn mx-2" to="/">
        <i-mdi-home-search-outline class="icon-footer" />
      </router-link>
    </el-tooltip>

    <el-tooltip :content="isDark ? ('change light') : ('change dark')" placement="top">
      <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
        <i-ph-cloud-moon-bold v-if="isDark" class="icon-footer" />
        <i-ph-sun-horizon-bold v-else class="icon-footer" />
      </button>
    </el-tooltip>

    <el-tooltip content="(method to using)" placement="top">
      <router-link class="icon-btn mx-2" to="/process">
        <i-ri-article-line class="icon-footer" />
      </router-link>
    </el-tooltip>
  </div>
</template>

<style lang="scss">
.icon-footer {
  font-size: 1.3em;
}
</style>
