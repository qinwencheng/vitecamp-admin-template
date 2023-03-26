import type { RouteRecordRaw } from 'vue-router'

const MenuItem = defineComponent({
  props: {
    item: Object as PropType<RouteRecordRaw>,
  },
  setup(props) {
    if (props.item && props.item.children) {
      return () => (
        <el-sub-menu index={props.item!.path as string}
          v-slots={{
            title: () => (
              <>
                <el-icon>
                  <div class={props.item?.meta?.icon ?? 'i-line-md-home-simple-filled'} />
                </el-icon>
                <span>{props.item!.meta?.title ?? props.item?.name ?? '未知名称'}</span>
              </>
            ),
          }}
        >
          {
            props.item!.children!.map(x => (<MenuItem item={x} />))
          }
        </el-sub-menu>
      )
    }
    else {
      return () => (
        <el-menu-item index={props.item!.path as string}>
          <el-icon>
            <div class={props.item?.meta?.icon ?? 'i-line-md-home-simple-filled'} />
          </el-icon>
          <span>{props.item?.meta?.title ?? props.item?.name ?? '未知名称'}</span>
        </el-menu-item>
      )
    }
  },
})

export default MenuItem
