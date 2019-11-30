import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: "/",
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: "/login",
    meta: {layout: 'empty'},
    component: Login,
  },

  ]
})
