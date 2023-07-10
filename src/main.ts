import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import i18n from '@/lang/index'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')