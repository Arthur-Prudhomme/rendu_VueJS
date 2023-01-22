import { createRouter, createWebHashHistory } from 'vue-router'
import JournalView from '@/views/JournalVue.vue'
import ContactVue from '@/views/ContactVue.vue'
import ClavierVue from '@/views/ClavierVue.vue'
import FormVue from '@/views/FormVue.vue'

const routes = [
  {
    path: '/journal',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactVue
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierVue
  },
  {
    path: '/form',
    name: 'form',
    component: FormVue
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
