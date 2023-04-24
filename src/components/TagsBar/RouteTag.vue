<script setup lang="ts">
const props = defineProps<{
  title: string
  path: string
}>()

const route = useRoute()
const isActiveTag = computed(() => props.path === route.path)
</script>

<template>
  <el-tag :type="isActiveTag ? '' : 'info'" class="[&.el-tag]:(h-7 mx-10px text-size-[var(--el-font-size-base)] cursor-pointer)" :class="{ 'hover:text-[var(--el-color-primary)]': !isActiveTag }">
    {{ props.title }}
  </el-tag>
</template>
