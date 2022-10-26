import { defineStore } from 'pinia'
import { RouteRecordRaw, RouteRecordName } from 'vue-router'

import { constRouter, asyncRouter } from '../../router/index'
export default defineStore('permission', {
  state() {
    return {
      routers: constRouter
    }
  },
  actions: {
    async filterRoutes(data: RouteRecordName[]) {
      //  data 就是服务器返回的该用户的角色对应的权限标识
      // 遍历所有的动态路由映射，判断它的name是不是在权限标识数组中，如果在说明属于该用户的动态路由映射
      const userRoutes = [] as RouteRecordRaw[]
      asyncRouter.forEach((item) => {
        let arr = [] as any
        if (data.includes(item.name as string)) userRoutes.push(item)
        if (item.children) {
          item.children.forEach((val) => {
            if (data.includes(val.name as string)) arr.push(val)
          })
        }

        item.children = arr
      })
      this.routers = [...constRouter, ...userRoutes]
      // 返回整理好的动态路由
      return userRoutes
    }
  }
})
