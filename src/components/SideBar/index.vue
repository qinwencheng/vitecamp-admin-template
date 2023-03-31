<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

defineOptions({
  // 为了能够在最外层配置el-menu的一些属性，所以设置为手动选择继承的组件
  inheritAttrs: false,
})

interface AttrsType { [x: string]: unknown; itemList: RouteRecordRaw[] }
const attrs = useAttrs() as AttrsType
</script>

<template>
  <SideLogo />
  <el-scrollbar class="h-full overflow-auto">
    <SideMenu v-bind="attrs" />
  </el-scrollbar>
</template>
