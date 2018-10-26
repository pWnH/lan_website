import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/games',
      name: 'games',
      // route level code-splitting
      // this generates a separate chunk (games.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "games" */ './views/Games.vue')
    },
    {
      path: '/saved',
      name: 'saved',
      // route level code-splitting
      // this generates a separate chunk (saved.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "saved" */ './views/Saved.vue')
    },


    {
      path: '*',
      name: 'home',
      component: Home
    },
  ]
})
