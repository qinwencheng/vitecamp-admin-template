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
  <el-menu id="side-menu" default-active="2" class="h-full" unique-opened router>
    <MenuContent :item-list="props.itemList" />
  </el-menu>
</template>

<style lang="postcss">
/* 默认情况下菜单项的样式 */
#side-menu .el-menu-item,
#side-menu .el-sub-menu__title {
  border-radius: 3px;
  height: 42px;
  margin-top: 6px;
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
