import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import API from './views/API.vue'
import APIGroup from './views/APIGroup.vue'
import APIPage from './views/APIPage.vue'
import Form from './views/AddForm.vue'

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
  {
    path: '/api-group',
    meta: {layout: 'main'},
    component: APIGroup,
  },
  {
    path: '/api',
    meta: {layout: 'main'},
    component: API,
  },
  {
    path: '/api-page',
    meta: {layout: 'main'},
    component: APIPage,
  },
  {
    path: '/add-project',
    meta: {layout: 'main'},
    component: Form,
  },
  ]
})
