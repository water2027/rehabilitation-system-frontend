// const eventNames = ['API:UN_AUTH', 'API:NOT_FOUND']

class EventEmitter {
  listeners = {
    'API:UN_AUTH': new Set(),
    'API:NOT_FOUND': new Set(),
  }

  on(eventName, listener) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = new Set();
    }
    this.listeners[eventName].add(listener)
  }

  emit(eventName, ...args) {
    this.listeners[eventName].forEach((listener) => listener(...args))
  }
}

export default new EventEmitter()
