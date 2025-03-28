import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import app from './App.vue'
import router from './router'

createApp(app)
	.use(createPinia())
	.use(router)
	.mount('#app');
