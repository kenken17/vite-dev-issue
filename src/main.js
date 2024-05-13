import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { MyComponent } from 'child-package'

const app = createApp(App)

app.use(MyComponent)
app.use(router)

app.mount('#app')
