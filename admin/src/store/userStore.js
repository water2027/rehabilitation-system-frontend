import { ref } from 'vue'
import { defineStore } from "pinia";

import eventEmitter from "@/utils/eventEmitter";

export const useUserStore = defineStore('user', ()=>{
    eventEmitter.on('API:UN_AUTH', ()=>{
        logout()
    })

    const token = ref('')
    const userInfo = ref()
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
        token,
        userInfo,
        setUser,
        setToken,
        logout
    }
})

