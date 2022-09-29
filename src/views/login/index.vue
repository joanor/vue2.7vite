<template>
  <div>
    <span>登录页面</span>
    <el-form
      ref="loginFormRef"
      class="loginform"
      :model="loginForm"
      :rules="loginFormRules"
    >
      <el-form-item prop="loginName">
        <el-input
          v-model="loginForm.loginName"
          autocomplete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="请输入密码"
          @keyup.enter="handleLoginForm(loginFormRef)"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">记住用户名</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          class="w-full"
          size="large"
          @click="handleLoginForm(loginFormRef)"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLogin } from '@/hooks/useLogin'

const checked = ref(false)
const loading = ref(false)

const { loginFormRef, loginForm, loginFormRules, handleLoginForm } = useLogin()
</script>

<style lang="scss" scoped></style>
