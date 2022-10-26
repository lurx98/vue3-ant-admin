import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import { pinia } from './store/store'
import router from '@/router/index'

import 'virtual:svg-icons-register'
// 引入组件
import SvgIcon from '@/components/SvgIcon/index.vue'

import '../mock/index'
import '@/permission'
const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
