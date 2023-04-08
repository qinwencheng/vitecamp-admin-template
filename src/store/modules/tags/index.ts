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

  const deleteTag = (path: string) => {
    if (tagsList.value.length === 1)
      return
    const index = tagsList.value.findIndex(x => x.path === path)
    tagsList.value.splice(index, 1)
  }

  return {
    tagsList,
    addTag,
    deleteTag,
  }
})
