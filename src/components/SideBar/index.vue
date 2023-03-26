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
  <SideMenu v-bind="attrs" />
</template>
