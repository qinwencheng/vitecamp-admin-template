<script lang="ts" setup>
import { mainRouter } from '~/router/modules/main/index'
import SideMenu from '~/components/SideMenu/index.vue'

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>

<template>
  <div class="side-menu-playground-page-container h-[calc(100vh-30px)] w-screen">
    <transition name="fade-slide" mode="out-in" appear>
      <el-container class="h-full w-full">
        <el-aside width="200px">
          <SideMenu :item-list="mainRouter" />
        </el-aside>
        <el-main>
          <section class="h-full w-full bg-[#f5f6fb]">
            <div class="main w-full h-full bg-red">
              <RouterView />
            </div>
          </section>
        </el-main>
      </el-container>
    </transition>
  </div>
</template>

<style lang="postcss">
/* 默认情况下菜单项的样式 */
#side-menu .el-menu-item,
#side-menu .el-sub-menu__title {
  border-radius: 3px;
  height: 42px;
  margin-bottom: 6px;
}

/* 默认情况下菜单项的hover的样式 */
#side-menu .el-menu-item::before,
#side-menu .el-sub-menu__title::before {
  left: 5px;
  right: 5px;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-radius: 3px;
  transition: background-color .3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 当鼠标放到某个菜单项上时的左边竖线 */
#side-menu .el-menu-item:hover::before,
#side-menu .el-sub-menu__title:hover::before,
#side-menu .el-menu-item.is-active::before {
  border-left: 4px solid var(--el-color-primary);
}

/* 当鼠标放到某个菜单项上时的样式 */
#side-menu .el-menu-item:hover,
#side-menu .el-sub-menu__title:hover {
  background-color: #f3f3f5;
}

/* 某个被选中激活的菜单项的样式 */
#side-menu .el-menu-item.is-active {
  background-color: var(--el-color-primary-light-9);
}

/* 二级菜单的伸缩动画 */
#side-menu .el-collapse-transition-enter-active,
#side-menu .el-collapse-transition-leave-active {
  transition: max-height .2s cubic-bezier(.4, 0, .2, 1) 0s;
}
</style>
