import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useTodoStore } from './stores/todoStore' 
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App)
const pinia = createPinia()

const options = {
    closeButton: false,
    hideProgressBar: true,
    timeout: 2000
};

app.use(Toast, options);

app.use(pinia)

const todoStore = useTodoStore()
todoStore.loadFromLocalStorage() // Load todos from local storage

app.mount('#app')