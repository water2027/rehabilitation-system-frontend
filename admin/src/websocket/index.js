import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { io } from 'socket.io-client'

/**
 * WebSocket 连接组合式函数
 * @param {string} url - 服务器地址
 * @param {object} options - Socket.IO 选项
 * @returns {object} - WebSocket 相关状态和方法
 */
export function useWebSocket(url = 'ws://127.0.0.1:3000', options = {}) {
  // 默认选项
  const defaultOptions = {
    autoConnect: true,
    reconnection: true,
    auth: {
      token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdjYjlmODQwLTBiN2YtMTFmMC05MzlhLTM5NDc0YmVjMzZiNSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NDMxMzAzNTgsImV4cCI6MTc0NTcyMjM1OH0.S01SU7mM92i9IAUg7w0NMP7Oc-qhLylwSLnG3kckIxQ`, // 假设您的 token 存储在 localStorage 中
    },
  }

  // 合并选项
  const socketOptions = { ...defaultOptions, ...options }

  // 状态变量
  const socket = ref(null)
  const isConnected = ref(false)
  const lastError = ref(null)
  const socketId = ref(null)

  // 消息记录
  const messages = reactive([])

  // 连接 WebSocket
  const connect = () => {
    // 如果已有连接，则先断开
    if (socket.value) {
      socket.value.disconnect()
    }

    // 创建新连接
    socket.value = io(url, socketOptions)

    // 设置事件监听
    socket.value.on('connect', () => {
      isConnected.value = true
      socketId.value = socket.value.id
      console.log('WebSocket 已连接，Socket ID:', socket.value.id)
    })

    socket.value.on('disconnect', (reason) => {
      isConnected.value = false
      console.log('WebSocket 已断开:', reason)
    })
  }

  // 断开连接
  const disconnect = () => {
    if (socket.value) {
      socket.value.disconnect()
      socket.value = null
    }
  }

  // 发送消息
  const sendMessage = (targetId, messageContent) => {
    if (!socket.value || !isConnected.value) {
      console.error('WebSocket 未连接，无法发送消息')
      return false
    }

    socket.value.emit('message', {
      target: targetId,
      message: messageContent,
    })

    return true
  }

  // 注册自定义事件监听
  const on = (event, callback) => {
    if (!socket.value) return
    socket.value.on(event, callback)
  }

  // 移除事件监听
  const off = (event, callback) => {
    if (!socket.value) return
    socket.value.off(event, callback)
  }

  // 组件挂载时连接 WebSocket（如果 autoConnect 为 true）
  onMounted(() => {
    if (socketOptions.autoConnect) {
      connect()
    }
  })

  // 组件卸载时断开连接
  onUnmounted(() => {
    disconnect()
  })

  return {
    socket,
    isConnected,
    lastError,
    socketId,
    messages,
    connect,
    disconnect,
    sendMessage,
    on,
    off,
  }
}
