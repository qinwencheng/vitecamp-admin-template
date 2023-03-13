<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
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
          <el-menu default-active="2" class="side-menu h-full" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Location />
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">
                  item one
                </el-menu-item>
                <el-menu-item index="1-2">
                  item two
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">
                  item three
                </el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>
                  item four
                </template>
                <el-menu-item index="1-4-1">
                  item one
                </el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon>
                <IconMenu />
              </el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <Document />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Setting />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <section class="h-full w-full bg-[#f5f6fb]">
            <div class="main w-full h-full bg-red">
              111
            </div>
          </section>
        </el-main>
      </el-container>
    </transition>
  </div>
</template>

<style lang="postcss">
/* 默认情况下菜单项的样式 */
.side-menu .el-menu-item,
.side-menu .el-sub-menu__title {
  border-radius: 3px;
  height: 42px;
  margin-top: 6px;
}

/* 默认情况下菜单项的hover的样式 */
.side-menu .el-menu-item::before,
.side-menu .el-sub-menu__title::before {
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
.side-menu .el-menu-item:hover::before,
.side-menu .el-sub-menu__title:hover::before,
.side-menu .el-menu-item.is-active::before {
  border-left: 4px solid var(--el-color-primary);
}

/* 当鼠标放到某个菜单项上时的样式 */
.side-menu .el-menu-item:hover,
.side-menu .el-sub-menu__title:hover {
  background-color: #f3f3f5;
}

/* 某个被选中激活的菜单项的样式 */
.side-menu .el-menu-item.is-active {
  background-color: var(--el-color-primary-light-9);
}
</style>
