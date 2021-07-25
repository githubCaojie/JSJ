import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/login.vue'),
      meta: {
        title: '湖南省交通水利建设集团有限公司'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/home/home.vue'),
      meta: {
        title: '湖南省交通水利建设集团有限公司'
      }
    }
  ]
})
