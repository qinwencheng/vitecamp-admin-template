import { createApp } from 'vue'
// i18n
// import { createI18n } from 'vue-i18n'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'

// vue router
import App from './App.vue'
import router from '~/router/index'
// pinia
import store from '~/store'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '~/styles/index.scss'

// const i18n = createI18n({
//   locale: 'zh-CN',
//   messages,
// })

const app = createApp(App)

app.use(router).use(store)

// app.use(i18n)

app.mount('#app')
