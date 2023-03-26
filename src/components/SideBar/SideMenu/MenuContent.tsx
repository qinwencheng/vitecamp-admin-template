import type { RouteRecordRaw } from 'vue-router'
import MenuItem from './MenuItem'

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

export default MenuContent
