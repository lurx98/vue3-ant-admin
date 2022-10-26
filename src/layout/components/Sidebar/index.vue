<script setup lang="ts" name="Sidebar">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue'
import SidebarItem from './SidebarItem.vue'
import { reactive, ref, computed, watch, nextTick } from 'vue'
import type { MenuProps } from 'ant-design-vue'
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router'
import useStore from '../../../store/index'
const { tabs, permission } = useStore()
const route = useRoute()
const router = useRouter()
const findPatentValue = (array: readonly RouteRecordRaw[], value: string) => {
  if (!value || !Array.isArray(array)) return []
  const result = [] as string[]
  const seek = (array: RouteRecordRaw[], value: string) => {
    let parentValue = ''
    const up = (array: RouteRecordRaw[], value: string, lastValue = '') => {
      array.forEach((v: RouteRecordRaw) => {
        const val = v.path
        const child = v.children
        if (val === value) {
          parentValue = lastValue
          return
        }
        if (child && child.length && child.length !== 1) up(child, value, val)
      })
    }
    up(array, value)
    if (parentValue) {
      result.unshift(parentValue)
      seek(array, parentValue)
    }
  }
  seek(array, value)
  return [...result, value]
}

const selectedKeys2 = ref<string[]>([])
const openKeys = ref<string[]>([])
const afn: MenuProps['onClick'] = ({ item, key, keyPath }) => {
  router.push(key as string)
}

watch(
  route,
  () => {
    const result = findPatentValue(permission.routers, route.path)
    tabs.add(route)
    selectedKeys2.value = result
    openKeys.value = result
  },
  { immediate: true }
)
const routers = computed(() => {
  console.log('222')
  return permission.routers
})
</script>

<template>
  <a-layout-sider width="200" style="background: #fff" class="scrollBar">
    <a-menu
      class="aaaaaa"
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
      @click="afn"
    >
      <sidebar-item v-for="item in routers" :item="item" :key="item.path"></sidebar-item>
    </a-menu>
  </a-layout-sider>
</template>

<style lang="scss">
.aaaaaa {
  width: 200px;
  position: fixed;
  top: 64px;
  overflow: scroll;
}
</style>
