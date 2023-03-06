import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// iconfont 样式表
import '@/assets/iconfont/iconUniversal/iconfont.css'
import '@/assets/iconfont/iconMusic/iconfont.css'
import '@/assets/iconfont/iconVideo/iconfont.css'
import '@/assets/iconfont/iconImage/iconfont.css'
import '@/assets/iconfont/iconSocial/iconfont.css'
import '@/assets/iconfont/iconShopping/iconfont.css'
import '@/assets/iconfont/iconFood/iconfont.css'
import '@/assets/iconfont/iconEmoji/iconfont.css'
import '@/assets/iconfont/iconSafety/iconfont.css'
import '@/assets/iconfont/iconEducation/iconfont.css'
import '@/assets/iconfont/iconSport/iconfont.css'
import '@/assets/iconfont/iconWeather/iconfont.css'
import '@/assets/iconfont/iconPet/iconfont.css'
import '@/assets/iconfont/iconMsg/iconfont.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store).use(ElementPlus).use(router).mount('#app')

Object.keys(ElementPlusIconsVue).forEach(key => {
    app.component(key, ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue])
  })