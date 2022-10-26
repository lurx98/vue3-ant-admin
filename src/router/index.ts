import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import layout from '@/layout/index.vue'
export const constRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '首页',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      hidden: true
    }
  }
]
export const asyncRouter: RouteRecordRaw[] = [
  {
    path: '/a',
    component: layout,
    name: 'a',
    redirect: '/a/form',
    meta: {
      title: '分类',
      icon: 'tree'
    },
    children: [
      {
        path: '/a/form',
        name: 'from',
        component: () => import('@/views/form/index.vue'),
        meta: {
          title: '表单',
          icon: 'tree'
        }
      },
      {
        path: '/a/table',
        name: 'table',
        component: () => import('@/views/table/index.vue'),
        meta: {
          title: '表格',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/b',
    component: layout,
    name: 'b',
    redirect: '/b/tree',
    children: [
      {
        path: '/b/tree',
        name: 'tree',
        component: () => import('@/views/tree/index.vue'),
        meta: {
          title: '树',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/user',
    component: layout,
    name: 'user',
    meta: {
      title: '用户中心',
      icon: 'form'
    },
    children: [
      {
        path: '/user/index',
        name: 'userindex',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '用户首页',
          icon: 'tree'
        }
      },
      {
        path: '/user/setting',
        name: 'usersetting',
        component: () => import('@/views/user/setting.vue'),
        meta: {
          title: '用户设置',
          icon: 'eye'
        }
      },
      {
        path: '/user/userdata',
        name: 'userdata',
        component: () => import('@/views/user/user-data.vue'),
        meta: {
          title: '用户数据',
          icon: 'tree'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constRouter]
})
export default router
