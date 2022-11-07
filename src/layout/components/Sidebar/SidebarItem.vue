<script setup lang="ts" name="SidebarItem">
import { reactive, ref, computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    require: true
  },
  key: {
    type: String,
    require: true
  }
})
const a = computed(() => {
  return props.item?.children && props.item?.meta?.title
})
const b = computed(() => {
  return props.item?.children
})
const c = computed(() => {
  return props.item?.children?.length === 0
})
</script>

<template>
  <div v-if="!item?.meta?.hidden && !c">
    <a-sub-menu :key="item?.path" v-if="a">
      <template #icon></template>
      <template #title>
        <svg-icon
          :icon-class="item?.meta.icon"
          style="width: 10px; height: 10px; fill: currentColor; margin-right: 5px"
        ></svg-icon>
        <span>{{ item?.meta.title }}</span>
      </template>
      <SidebarItem v-for="child in item?.children" :item="child" :key="child.path"></SidebarItem>
    </a-sub-menu>
    <a-menu-item v-else :key="b ? item?.children[0].path : item?.path">
      <svg-icon
        :icon-class="b ? item?.children[0].meta.icon : item?.meta.icon"
        style="width: 10px; height: 10px; fill: currentColor; margin-right: 5px"
      ></svg-icon>
      {{ b ? item?.children[0].meta.title : item?.meta.title }}
    </a-menu-item>
  </div>
</template>

<style scoped lang="less"></style>
