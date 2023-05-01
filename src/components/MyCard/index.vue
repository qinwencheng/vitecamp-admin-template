<script setup lang="ts">
const props = defineProps<{
  bordered?: boolean
  title?: string
}>()
</script>

<template>
  <div
    class="my-card box-border rounded-3px bg-#fff dark:bg-#18181c leading-relaxed break-words text-14px children:(px-4 py-3)"
    :class="{ 'b-1px b-solid b-[var(--border-color)]': props.bordered }"
  >
    <div v-if="props.title || $slots['header-main'] || $slots['header-extra']" class="header text-4 flex items-center justify-between b-b border-[var(--el-border-color)]">
      <!-- header-main or props.title -->
      <div v-if="$slots['header-main']" class="card-header__main w-full" role="heading">
        <slot name="header-main" />
      </div>
      <div v-else-if="props.title" class="card-header__main w-full" role="heading">
        {{ props.title }}
      </div>

      <div v-if="$slots['header-extra']" class="card-header__extra">
        <slot name="header-extra" />
      </div>
    </div>

    <div class="main main pt-0">
      <slot />
    </div>

    <div v-if="$slots.footer" class="b-t border-[var(--el-border-color)]">
      <slot class="footer" name="footer" />
    </div>
  </div>
</template>
