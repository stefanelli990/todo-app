import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useTodoStore } from './stores/todoStore' 

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

const todoStore = useTodoStore()
todoStore.loadFromLocalStorage() // Load todos from local storage

app.mount('#app')