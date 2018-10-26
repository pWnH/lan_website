import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Saved from './views/Saved.vue'

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
      component: Saved
    },


    {
      path: '*',
      name: 'home',
      component: Home
    },
  ]
})
