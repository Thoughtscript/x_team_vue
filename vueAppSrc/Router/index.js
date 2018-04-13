import Vue from 'vue'
import VueRouter from 'vue-router'

import ParentComponent from '../Components/ParentComponent.vue'
import FirebaseComponent from '../Components/FirebaseComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ParentComponent
  },
  {
    path: '/Nested',
    component: ParentComponent
  },
  {
    path: '/Firebase',
    component: FirebaseComponent
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})