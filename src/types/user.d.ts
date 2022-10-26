import { RouteRecordName } from 'vue-router'
export type loginInfo = {
  message: string
  status: number
  token: string
}
export interface userInfo {
  status: number
  message: string
  introduction: string
  avatar: string
  name: string
  menu: RouteRecordName[]
}
