import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/iconfont/iconfont.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store).use(ElementPlus).use(router).mount('#app')

Object.keys(ElementPlusIconsVue).forEach(key => {
    app.component(key, ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue])
  })