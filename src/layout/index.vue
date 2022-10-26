<script setup lang="ts">
import Navbar from './components/Navbar/index.vue'
import Sidebar from './components/Sidebar/index.vue'
import Tabs from './components/Tabs/index.vue'
import { reactive, ref } from 'vue'

const collapsed = ref<boolean>(false)
</script>

<template>
  <a-layout>
    <Navbar></Navbar>
    <a-layout class="body">
      <Sidebar></Sidebar>
      <a-layout>
        <Tabs></Tabs>
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="less">
.ant-layout {
  width: 100%;
  min-height: 100%;
}
.body {
  margin-top: 64px;
}
</style>
