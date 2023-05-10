<script setup lang="ts">
interface Props {
  bordered?: boolean
  title?: string
  shadow: boolean | 'always' | 'hover' | 'never'
}

const props = withDefaults(defineProps<Props>(), {
  shadow: 'never',
})
</script>

<template>
  <div
    class="my-card box-border rounded-3px bg-#fff dark:bg-#18181c leading-[1.6] break-words text-14px children:(px-4 py-3)"
    :class="{ 'b-1px b-solid b-[var(--border-color)]': props.bordered, 'hover:shadow-[var(--box-shadow)]': props.shadow === 'hover', 'shadow-[var(--box-shadow)]': ['always', true].includes(props.shadow) }"
  >
    <div
      v-if="props.title || $slots.header || $slots['header-extra']"
      class="header text-4 flex items-center justify-between"
      :class="{ 'b-b border-[var(--border-color)]': props.bordered }"
    >
      <!-- header or props.title -->
      <div v-if="$slots.header" class="card-header__main w-full" role="heading">
        <slot name="header" />
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

    <div v-if="$slots.footer" :class="{ 'b-t border-[var(--border-color)]': props.bordered }">
      <slot class="footer" name="footer" />
    </div>
  </div>
</template>
