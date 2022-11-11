<script setup lang="ts" name="Sidebar">
import SidebarItem from './SidebarItem.vue'
import type { MenuProps } from 'ant-design-vue'
import { RouteRecordRaw } from 'vue-router'
import useStore from '@/store/index'
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
  },
  { immediate: true }
)
const routers = computed(() => {
  console.log(route.matched)
  return permission.routers
})
</script>

<template>
  <a-layout-sider width="250" style="background: #fff" class="scrollBar">
    <a-menu
      class="menu-container"
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      mode="inline"
      @click="afn"
    >
      <sidebar-item v-for="item in routers" :item="item" :key="item.path"></sidebar-item>
    </a-menu>
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.menu-container {
  height: 100%;
  border-right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
