import { createApp } from 'vue'

// vue router
import App from './App.vue'
import router from '~/router/index'

// pinia
import store from '~/store'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '~/styles/index.scss'

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
