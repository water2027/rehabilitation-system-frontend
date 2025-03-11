import { createRouter, createWebHistory } from 'vue-router'

import eventEmitter from '@/utils/eventEmitter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../layout/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/HomeView.vue'),
        },
      ],
    },
    {
      path: '/auth/',
      name: 'Auth',
      component: () => import('../layout/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('../views/LoginView.vue'),
        },
      ],
    },
  ],
})

eventEmitter.on('API:UN_AUTH', () => {
  router.push('/auth/login')
})

eventEmitter.on('API:NOT_REAL_NAME', () => {
  router.push('/auth/real-name')
})

router.beforeEach((to, from, next) => {
  const token = {}
  eventEmitter.emit('TOKEN:GET', token)
  if (to.path === '/auth/login') {
    if (token.value) {
      next('/')
      return
    }
    next()
    return
  }
  if (!token.value) {
    next('/auth/login')
    return
  }
  next()
})

export default router
