import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Breakfast from '@/components/Breakfast'
import GuessNumber from '@/components/GuessNumber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    ,{
      path: '/breakfast',
      name: 'breakfast',
      component: Breakfast
    }
    ,{
      path: '/guessNumber',
      name: 'guessNumber',
      component: GuessNumber
    }
  ]
})
