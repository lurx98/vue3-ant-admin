import request from '@/utils/request'
import { AxiosResponse } from 'axios'
import { loginInfo, userInfo } from '@/types/user'
export const userLogin = (data: object) => {
  return request<unknown, loginInfo>({
    url: '/user/login',
    method: 'post',
    data
  })
}
export const getUser = () => {
  return request<unknown, userInfo>({
    url: '/user/userInfo'
  })
}
