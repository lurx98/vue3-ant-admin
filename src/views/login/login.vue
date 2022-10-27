<script setup lang="ts" name="login">
import { reactive, ref } from 'vue'
import useStore from '@/store/index'
import router from '../../router/index'
const { user } = useStore()
interface FormState {
  username: string
  password: string
  remember: boolean
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})
const onFinish = async (values: any) => {
  await user.login(values)
  router.push('/')
  await user.getUserInfo()
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<template>
  <a-card title="登陆" style="width: 400px" class="login-container">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<style scoped lang="scss">
.login-container {
  margin: 100px auto;
}
</style>
