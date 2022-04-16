import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import particles from "particles.vue3"

import 'tailwindcss/tailwind.css'
import "@/assets/static/iconfont.css"

const app = createApp(App)
app.use(store)
app.use(router)
app.use(particles)
app.mount('#app')
