import axios from 'axios'

import eventEmitter from '@/utils/eventEmitter'

axios.interceptors.request.use((config) => {
  if (config.url.startsWith('/auth')) {
    // 登录接口
    return config
  }
  // 获取token操作
  const token = localStorage.getItem('token')
  if (!token) {
    eventEmitter.emit('API:UN_AUTH')
    return
  }
  config.headers.Authorization = `Bearer ${token}`
  return config
})

const errorCodeHandler = {}

const httpCodeHandler = {
  404: () => {
    eventEmitter.emit('API:NOT_FOUND')
  },
  500: () => {},
}

axios.interceptors.response.use(
  (resp) => {
    const { code } = resp.data
    if (code !== 0) {
      // 业务错误处理
      // 之后再约定code
      errorCodeHandler[code]?.(resp.data)
      return Promise.reject(resp.data)
    }
    const { data } = resp.data
    return data
  },
  (error) => {
    const { status } = error
    httpCodeHandler[status]?.()
    return Promise.reject(error)
  },
)

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
})

export { instance }
