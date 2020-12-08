import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Scss style
import './assets/styles/style.scss'

createApp(App)
.use(store)
.use(router)
.mount('#app')
