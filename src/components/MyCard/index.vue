<!-- 使用el-card -->
<template>
  <div class="w-450px">
    <div class="my-card box-border rounded-3px bg-#fff  leading-relaxed break-words text-14px children:(px-4 py-3)">
      <div class="header text-4 flex items-center justify-between">
        <div class="card-header__main" role="heading">
          访问量
        </div>
        <div class="card-header__extra">
          <el-tag>日</el-tag>
        </div>
      </div>

      <div class="main pt-0 b-t">
        <div class="flex justify-between px-1 py-1">
          <span class="text-3xl">91,942</span>
        </div>
        <div class="flex justify-between px-1 py-1">
          <div class="text-sn">
            日同比 <span>54%</span><i
              role="img" class="n-icon"
              style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); font-size: 12px; color: rgb(0, 255, 111);"
            ><svg
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"
            >
              <path
                d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                fill="currentColor"
              />
            </svg></i>
          </div>
          <div class="text-sn">
            周同比 <span>65%</span><i
              role="img" class="n-icon"
              style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); font-size: 12px; color: rgb(255, 222, 102);"
            ><svg
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"
            >
              <path
                d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                fill="currentColor"
              />
            </svg></i>
          </div>
        </div>
      </div>

      <div class="footer b-t">
        <div class="flex justify-between">
          <div class="text-sn">
            总访问量：
          </div>
          <div class="text-sn">
            <span>484,844</span>
          </div>
        </div>
      </div>
    </div>

    <el-divider class="mt-4" />

    <SlotCard>
      <template #header-main>
        <div class="card-header__main" role="heading">
          访问量
        </div>
      </template>

      <template #header-extra>
        <div class="card-header__extra">
          <el-tag>日</el-tag>
        </div>
      </template>

      <template #main>
        <div class="flex justify-between px-1 py-1">
          <span class="text-3xl">91,942</span>
        </div>
        <div class="flex justify-between px-1 py-1">
          <div class="text-sn">
            日同比 <span>54%</span><i
              role="img" class="n-icon"
              style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); font-size: 12px; color: rgb(0, 255, 111);"
            ><svg
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"
            >
              <path
                d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                fill="currentColor"
              />
            </svg></i>
          </div>
          <div class="text-sn">
            周同比 <span>65%</span><i
              role="img" class="n-icon"
              style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); font-size: 12px; color: rgb(255, 222, 102);"
            ><svg
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"
            >
              <path
                d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                fill="currentColor"
              />
            </svg></i>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-between">
          <div class="flex justify-between">
            <div class="text-sn">
              总访问量：
            </div>
            <div class="text-sn">
              <span>484,844</span>
            </div>
          </div>
        </div>
      </template>
    </SlotCard>
  </div>
</template>
