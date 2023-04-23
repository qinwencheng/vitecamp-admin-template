<script setup lang="ts">
import { useTagsStore } from '~/store/modules'

const route = useRoute()
const router = useRouter()
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

const handleClose = (path: string) => {
  tagsStore.deleteTag(path)
}

const handleTagClick = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div>
    <RouteTag v-for="item in tagsStore.tagsList" :key="item.path" :path="item.path" :title="item.title" class="inline-block" closable @close="handleClose(item.path)" @click="handleTagClick(item.path)">
      {{ item.title }}
    </RouteTag>
  </div>
</template>
