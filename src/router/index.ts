import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/dashboard.vue'
import Admin from '../views/Admin.vue'
import Users from '../views/Users.vue'
import Posts from '../views/Posts.vue'
import Edit from '../views/Edit.vue'
import store from '../store'
import { component } from 'vue/types/umd'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta:{
      requiresAuth: true
    },
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit,
    meta:{
      requiresAuth: true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
