<template>
  <span>MonitorPage</span>
  <div class="card-container" grid="~ gap-x-3 gap-y-2 sm:cols-2 lg:cols-3 xl:cols-4">
    <MyCard bordered>
      <template #header>
        <div class="card-header__main" role="heading">
          访问量
        </div>
      </template>

      <template #header-extra>
        <div class="card-header__extra">
          <el-tag type="success">
            日
          </el-tag>
        </div>
      </template>

      <div class="flex justify-between px-1 py-1">
        <span class="text-3xl">91,942</span>
      </div>

      <div class="flex justify-between px-1 py-1">
        <div>
          日同比
          <span>54%</span>
          <div class="i-ant-design-caret-up-filled bg-[var(--el-color-success)] text-12px" />
        </div>
        <div>
          周同比
          <span>65%</span>
          <div class="i-ant-design-caret-down-filled bg-[var(--el-color-warning)] text-12px" />
        </div>
      </div>
      <template #footer>
        <div class="flex justify-between">
          <div>
            总访问量：
          </div>
          <div>
            <span>484,844</span>
          </div>
        </div>
      </template>
    </MyCard>

    <MyCard bordered>
      <template #header>
        <div class="card-header__main" role="heading">
          销售额
        </div>
      </template>

      <template #header-extra>
        <div class="card-header__extra">
          <el-tag type="warning">
            周
          </el-tag>
        </div>
      </template>

      <div class="flex justify-between px-1 py-1">
        <span class="text-3xl">￥68,837</span>
      </div>

      <div class="px-1 py-1 flex">
        <div class="flex-1">
          <el-progress :text-inside="true" :stroke-width="16" :percentage="79" striped striped-flow />
        </div>
      </div>
      <template #footer>
        <div class="flex justify-between">
          <div>
            总销售额：
          </div>
          <div>
            <span>￥194,147</span>
          </div>
        </div>
      </template>
    </MyCard>

    <MyCard bordered>
      <template #header>
        <div class="card-header__main" role="heading">
          订单量
        </div>
      </template>

      <template #header-extra>
        <div class="card-header__extra">
          <el-tag>周</el-tag>
        </div>
      </template>

      <div class="flex justify-between px-1 py-1">
        <span class="text-3xl">42,519</span>
      </div>

      <div class="flex justify-between px-1 py-1">
        <div>
          日同比
          <span>66%</span>
          <div class="i-ant-design-caret-up-filled bg-[var(--el-color-success)] text-12px" />
        </div>
        <div>
          周同比
          <span>69%</span>
          <div class="i-ant-design-caret-down-filled bg-[var(--el-color-warning)] text-12px" />
        </div>
      </div>
      <template #footer>
        <div class="flex justify-between">
          <div>
            转化率：
          </div>
          <div>
            <span>196,488%</span>
          </div>
        </div>
      </template>
    </MyCard>

    <MyCard bordered>
      <template #header>
        <div class="card-header__main" role="heading">
          成交额
        </div>
      </template>

      <template #header-extra>
        <div class="card-header__extra">
          <el-tag type="danger">
            周
          </el-tag>
        </div>
      </template>

      <div class="flex justify-between px-1 py-1">
        <span class="text-3xl">￥15,404</span>
      </div>

      <div class="flex justify-between px-1 py-1">
        <div>
          月同比
          <span>11%</span>
          <div class="i-ant-design-caret-up-filled bg-[var(--el-color-success)] text-12px" />
        </div>
        <div>
          周同比
          <span>22%</span>
          <div class="i-ant-design-caret-down-filled bg-[var(--el-color-warning)] text-12px" />
        </div>
      </div>
      <template #footer>
        <div class="flex justify-between">
          <div>
            总成交额：
          </div>
          <div>
            <span>￥447,413</span>
          </div>
        </div>
      </template>
    </MyCard>
  </div>

  <div class="menu-container mt-3" grid="~ gap-x-3 gap-y-2 sm:cols-4 lg:cols-3 xl:cols-8">
    <MyCard>
      <div class="py-2">
        <div class="flex justify-center">
          <div class="i-mdi-user-supervisor text-32px text-#8fd0ff" />
        </div>
        <div class="menu-text flex justify-center">
          <span>用户</span>
        </div>
      </div>
    </MyCard>

    <MyCard>
      <div class="py-2">
        <div class="flex justify-center">
          <div class="i-carbon-text-link-analysis text-32px text-#8fd0ff" />
        </div>
        <div class="menu-text flex justify-center">
          <span>分析</span>
        </div>
      </div>
    </MyCard>

    <MyCard>
      <div class="py-2">
        <div class="flex justify-center">
          <div class="i-ic-outline-shopping-cart text-32px text-#ff9c6e" />
        </div>
        <div class="menu-text flex justify-center">
          <span>商品</span>
        </div>
      </div>
    </MyCard>

    <MyCard>
      <div class="py-2">
        <div class="flex justify-center">
          <div class="i-ant-design-account-book-outlined text-32px text-#b37feb" />
        </div>
        <div class="menu-text flex justify-center">
          <span>订单</span>
        </div>
      </div>
    </MyCard>

    <MyCard>
      <div class="py-2">
        <div class="flex justify-center">
          <div class="i-ant-design-credit-card-outlined text-32px text-#ffd666" />
        </div>
        <div class="menu-text flex justify-center">
          <span>票据</span>
        </div>
      </div>
    </MyCard>

    <MyCard>
      <div class="py-2">
        <div class="flex justify-center">
          <div class="i-ant-design-mail-outlined text-32px text-#5cdbd3" />
        </div>
        <div class="menu-text flex justify-center">
          <span>消息</span>
        </div>
      </div>
    </MyCard>

    <MyCard>
      <div class="py-2">
        <div class="flex justify-center">
          <div class="i-ant-design-tags-outlined text-32px text-#ff85c0" />
        </div>
        <div class="menu-text flex justify-center">
          <span>标签</span>
        </div>
      </div>
    </MyCard>

    <MyCard>
      <div class="py-2">
        <div class="flex justify-center">
          <div class="i-ep-setting text-32px text-#ffc069" />
        </div>
        <div class="menu-text flex justify-center">
          <span>配置</span>
        </div>
      </div>
    </MyCard>
  </div>
</template>
