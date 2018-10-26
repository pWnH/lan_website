import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Saved from './views/Saved.vue'
import Games from './views/Games.vue'

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
      component: Games
    },
    {
      path: '/games/*',
      name: 'gamesAlt',
      component: Games
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
