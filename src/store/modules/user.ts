import { defineStore } from 'pinia'
import { userLogin, getUser } from '@/api/user'
import router from '../../router/index'
import { getToken, setToken, removeToken } from '@/utils/auth'
export default defineStore('user', {
  state() {
    return {
      token: getToken(),
      username: '',
      avatar: ''
    }
  },
  actions: {
    async login(data: object) {
      const { token } = await userLogin(data)
      setToken(token)
      this.token = token
    },
    quit() {
      this.token = ''
      removeToken()
      window.location.href = '/'
    },
    async getUserInfo() {
      const res = await getUser()
      this.username = res.name
      this.avatar = res.avatar
      return res.menu
    }
  }
})
