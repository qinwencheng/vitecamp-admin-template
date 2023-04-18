<template>
  <div v-if="$slots['header-main'] || $slots['header-extra']" class="my-card box-border rounded-3px bg-#fff  leading-relaxed break-words text-14px children:(px-4 py-3)">
    <div class="header text-4 flex items-center justify-between b-b">
      <div v-if="$slots['header-main']" class="card-header__main w-full" role="heading">
        <slot name="header-main" />
      </div>
      <div v-if="$slots['header-extra']" class="card-header__extra">
        <slot name="header-extra" />
      </div>
    </div>

    <div class="main main pt-0">
      <slot />
    </div>

    <div v-if="$slots.footer" class="b-t">
      <slot class="footer" name="footer" />
    </div>
  </div>
</template>
