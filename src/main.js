import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import './assets/main.css'
import Router from './Router'

const app = createApp(App)

app.use(Router)
app.mount('#app')
