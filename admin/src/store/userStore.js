import { ref } from 'vue'
import { defineStore } from 'pinia'

import eventEmitter from '@/utils/eventEmitter'

export const useUserStore = defineStore('user', () => {
  eventEmitter.on('API:UN_AUTH', () => {
    logout()
  })
  eventEmitter.on('TOKEN:GET', (t) => {
    t.value = token.value
  })

  const token = ref('')
  const userInfo = ref(null)
  const setUser = (user) => {
    userInfo.value = user
  }
  const setToken = (t) => {
    token.value = t
  }
  const logout = () => {
    userInfo.value = null
    token.value = ''
  }
  return {
    userInfo,
    setUser,
    setToken,
    logout,
  }
})
