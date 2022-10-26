<script setup lang="ts" name="Tabs">
import { reactive, ref, watch } from 'vue'
import useStore from '../../../store/index'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const { tabs } = useStore()
const activeKey = ref(route.path)
const onEdit = (targetKey: string, action: string) => {
  console.log(targetKey, action)
  if (action === 'remove') {
    tabs.del(targetKey)
  }
}
watch(route, () => {
  activeKey.value = route.path
})
const tabClick = (val: string) => {
  router.push(val)
}
</script>

<template>
  <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @tabClick="tabClick" @edit="onEdit">
    <a-tab-pane v-for="item in tabs.tab" :key="item.path" :tab="item.meta.title"></a-tab-pane>
  </a-tabs>
</template>

<style scoped lang="less"></style>
