import { createApp } from 'vue'
import App from './App.vue'
import {router} from './routes'
import '../src/style.css'
import { createPinia } from 'pinia'
const pinia = createPinia()


let app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
