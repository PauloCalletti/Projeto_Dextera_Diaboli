import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue' // ou um componente principal seu

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
