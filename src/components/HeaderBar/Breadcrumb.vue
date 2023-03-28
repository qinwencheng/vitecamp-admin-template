<script setup lang="ts">
const route = useRoute()
const router = useRouter()
function handleBreadClick(path: string) {
  if (path === route.path)
    return
  router.push(path)
}
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="item in route.matched.filter(item => !!item.meta?.title && item.meta?.title !== 'main')"
      :key="item.path"
      @click="handleBreadClick(item.path)"
    >
      <div class="flex items-center ">
        <div :class="item.meta.icon" class="mr-1 text-[18px]" />
        <div>
          {{ item.meta.title }}
        </div>
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
