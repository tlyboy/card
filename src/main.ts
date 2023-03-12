import 'normalize.css'
import './assets/styles/base.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const pinia = createPinia()

app.use(pinia)

app.mount('#app')
