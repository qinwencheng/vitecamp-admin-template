<script setup lang="ts">
import { useTagsStore } from '~/store/modules'

const route = useRoute()
const tagsStore = useTagsStore()
watch(
  route,
  () => {
    const tagItem = {
      title: route.meta.title as string,
      path: route.path,
    }
    tagsStore.addTag(tagItem)
  },
  { immediate: true },
)
</script>

<template>
  <div class="[&_.el-tag]:( h-7 mx-10px text-size-[var(--el-font-size-base)])">
    <el-tag v-for="item in tagsStore.tagsList" :key="item.path" class="inline-block" closable>
      {{ item.title }}
    </el-tag>
  </div>
</template>
