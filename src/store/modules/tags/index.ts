import { defineStore } from 'pinia'

interface Tag {
  title: string
  path: string
}

export const useTagsStore = defineStore('tags', () => {
  const tagsList = ref<Tag[]>([])
  const addTag = (tag: Tag) => {
    if (tagsList.value.some(x => x.path === tag.path))
      return

    tagsList.value.push(tag)
  }
  return {
    tagsList,
    addTag,
  }
})
