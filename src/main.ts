import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import '../src/styles/styles.css'

createApp(App).use(router).mount('#app')