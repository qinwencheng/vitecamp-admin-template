import { useAppStore } from '~/store/modules';

<template>
  <div class="header-bar icon-header bg-white w-full h-full border-b border-[#eee] flex px-15px">
    <div class="left-tool flex items-center">
      <MenuCollapse />
      <!-- 大于sm尺寸时display为block，否则为none -->
      <Breadcrumb class="ml-4 hidden sm:block" />
    </div>

    <div class="right-tool ml-auto flex items-center ">
      <DarkMode />
      <GithubSite />
      <Fullscreen />
    </div>
  </div>
</template>

<style lang="scss">
.icon-header {
  font-size: 1.3em;
}
</style>
