<script setup>
import { ref } from 'vue'

const LoginRequest = ref({
    telephone:'',
    vCode:'',
})

const isLoading = ref(false)

const login = async () => {
  
}

const sendCode = async () => {

}
</script>

<template>
  <el-form @submit.prevent="login" :model="LoginRequest" label-width="80px">
    <el-form-item label="手机号" prop="telephone">
      <el-input v-model="LoginRequest.telephone"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="vCode">
      <el-input v-model="LoginRequest.vCode"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="button" @click="sendCode" :loading-icon="Eleme" :loading="isLoading">发送验证码</el-button>
      <el-button type="primary" native-type="submit" :loading-icon="Eleme" :loading="isLoading">登录</el-button>
    </el-form-item>
  </el-form>
</template>
