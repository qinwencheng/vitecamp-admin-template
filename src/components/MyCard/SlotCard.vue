<template>
  <div class="my-card box-border rounded-3px bg-#fff  leading-relaxed break-words text-14px children:(px-4 py-3)">
    <div class="header text-4 flex items-center justify-between">
      <div class="card-header__main" role="heading">
        <slot name="header-main" />
      </div>
      <div class="card-header__extra">
        <slot name="header-extra" />
      </div>
    </div>

    <slot name="main" class="main pt-0 b-t" />

    <slot class="footer b-t" name="footer" />
  </div>
</template>
