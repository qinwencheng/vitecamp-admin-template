<script setup lang='tsx'>
import type { RouteRecordRaw } from 'vue-router'
import MenuItem from '~/components/SideMenu/MenuItem'

const props = defineProps({
  itemList: {
    type: Object as PropType<RouteRecordRaw[]>,
    required: true,
  },
})

const MenuContent = defineComponent({
  props: {
    itemList: {
      type: Object as PropType<RouteRecordRaw[]>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <>
        {
          props.itemList?.map(x => (<MenuItem item={x} />))
        }
      </>
    )
  },
})
</script>

<template>
  <el-menu id="side-menu" default-active="2" class="h-full" unique-opened router :collapse-transition="false">
    <MenuContent :item-list="props.itemList" />
  </el-menu>
</template>

<style lang="scss">
#side-menu {

  // 去除右边框
  &.el-menu {
    border-right: 0;
  }

  // 菜单的样式(展开状态)
  &.el-menu.el-menu--vertical:not(.el-menu--collapse) {

    // 默认情况下菜单项的样式
    .el-menu-item,
    .el-sub-menu__title {
      border-radius: 3px;
      height: 42px;
      margin-bottom: 6px;

      // 默认情况下菜单项的hover的样式
      &::before {
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

      // 当鼠标放到某个菜单项上时的左边竖线
      &:hover::before,
      &.is-active::before {
        border-left: 4px solid var(--el-color-primary);
      }

      // 当鼠标放到某个菜单项上时的样式
      &:hover {
        background-color: #f3f3f5;
      }
    }
  }

  // 菜单的样式(收缩为只有图标时状态)
  &.el-menu.el-menu--vertical.el-menu--collapse {

    .el-menu-item,
    .el-sub-menu__title {
      margin-bottom: 6px;
      height: 42px;

      &::before {
        left: 8px;
        right: 8px;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        pointer-events: none;
        border-radius: 3px;
        transition: background-color .3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:hover::before,
      &.is-active::before {
        border: none;
        background-color: #f3f3f5;
      }

      // 当鼠标放到某个菜单项上时的样式
      &:hover,
      &.is-active {
        background-color: #0000;
      }
    }
  }

}

// 收缩侧边栏时的二级菜单弹出框
.el-menu--vertical.el-menu--popup-container {
  ul {
    padding: 4px 0;
    min-width: 150px;

    li.el-menu-item,
    li.el-sub-menu,
    li .el-sub-menu__title {
      height: 40px;

      &:hover {
        background-color: #f3f3f5;
      }
    }
  }
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
