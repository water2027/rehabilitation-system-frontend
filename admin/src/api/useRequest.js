import axios from 'axios'

import CryptoService from '@/utils/encryption'

import eventEmitter from '@/utils/eventEmitter'

axios.interceptors.request.use((config) => {
  const { url } = config
  if (
    !(
      url.startsWith('/public') ||
      url.startsWith('/patient') ||
      url.startsWith('/doctor') ||
      url.startsWith('/admin')
    )
  ) {
    // 登录接口
    return config
  }
  // 获取token操作
  const token = {}
  eventEmitter.emit('TOKEN:GET', token)
  if (!token.value) {
    eventEmitter.emit('API:UN_AUTH')
    return
  }
  config.headers.Authorization = `Bearer ${token}`
  if (!import.meta.env.PRODUCTION_ENV) {
    return config
  }
  if (config.data) {
    const { data } = config
    const encryptData = CryptoService.encrypt(data)
    config.data = encryptData
  }
  return config
})

const errorCodeHandler = {
  // - token无效或没有token 1 (前端需要重新登录)
  1: () => {
    eventEmitter.emit('API:UN_AUTH')
  },
  // - 无权限 2
  2: () => {
    eventEmitter.emit('API:NO_PERMISSION')
  },
  // - 未实名 3
  3: () => {
    eventEmitter.emit('API:NOT_REAL_NAME')
  },
}

const httpCodeHandler = {
  404: () => {
    eventEmitter.emit('API:NOT_FOUND')
  },
  500: () => {},
}

axios.interceptors.response.use(
  (resp) => {
    if (import.meta.env.PRODUCTION_ENV) {
      const { data } = resp.data
      resp.data = CryptoService.decrypt(data)
    }
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
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
})

export default instance
