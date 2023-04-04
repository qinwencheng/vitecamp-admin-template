<script setup lang="ts">
const route = useRoute()
const router = useRouter()
function handleBreadClick(path: string) {
  if (path === route.path)
    return
  router.push(path)
}
</script>

<template>
  <el-breadcrumb id="breadcrumb" separator="/">
    <el-breadcrumb-item
      v-for="item in route.matched.filter(item => !!item.meta?.title && item.meta?.title !== 'main')"
      :key="item.path"
      @click="handleBreadClick(item.path)"
    >
      <div class="flex items-center ">
        <div :class="item.meta.icon" class="mr-1 text-[15px]" />
        <div>
          {{ item.meta.title }}
        </div>
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss">
#breadcrumb {

  // 重写el-breadcrumb的默认样式
  .el-breadcrumb__item .el-breadcrumb__inner,
  .el-breadcrumb__item .el-breadcrumb__inner a {
    padding: 4px;
    border-radius: 3px;
    transition: background-color .3s cubic-bezier(0.4, 0, 0.2, 1), color .3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }

  // 非最后一个元素的字体变灰，且有鼠标和hover效果
  .el-breadcrumb__item:not(:last-child) .el-breadcrumb__inner,
  .el-breadcrumb__item:not(:last-child) .el-breadcrumb__inner a {
    font-weight: normal;
    color: var(--el-text-color-secondary);
    cursor: pointer;

    // hover时字体亮黑，且有灰色方框背景
    &:hover {
      background-color: rgba(46, 51, 56, 0.09);
      color: var(--el-text-color-primary);
    }
  }

  // 最后一个元素(表示当前页面)的字体默认亮黑，且没有鼠标和hover效果
  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover {
    font-weight: normal;
    color: var(--el-text-color-primary);
    cursor: unset;
  }
}
</style>
