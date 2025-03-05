// 路由、网络请求、仓库之间的通信
class EventEmitter {

    /**
     * @type {Object.<string, Set<Function>>}
     */
    listeners = {
        'API:UN_AUTH': new Set(),
        'API:NOT_FOUND': new Set(),
        'TOKEN:GET': new Set(),
    }
    /**
     * 添加事件监听器
     * @param {string} eventName - 事件名称
     * @param {Function} listener - 监听器函数
     */
    on(eventName, listener) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = new Set()
        }
        this.listeners[eventName].add(listener)
    }

    emit(eventName, ...args) {
        this.listeners[eventName].forEach(listener=>listener(...args)) 
    }

    off(eventName, listener) {
        if (!this.listeners[eventName]) {
            throw new Error(`Event with name ${eventName} is not found`)
        }
        this.listeners[eventName].delete(listener)
    }
}

export default new EventEmitter()