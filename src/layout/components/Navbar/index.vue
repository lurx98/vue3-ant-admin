<script setup lang="ts" name="Navbar">
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue'
import useStore from '@/store/index'
const { user } = useStore()
const quit = () => {
  user.quit()
}
const a = ref([1, 2, 3, 4, 6, 7])
</script>

<template>
  <a-layout-header class="navbar">
    <a-row type="flex" justify="space-between">
      <a-col>xxxxxxxxxxxxxxx</a-col>
      <a-col>
        <a-row type="flex" justify="space-between" :gutter="16">
          <a-col>
            <a-avatar v-if="user.avatar" :src="user.avatar" />
            <a-avatar v-else size="small">
              <template #icon><UserOutlined /></template>
            </a-avatar>
          </a-col>
          <a-col>
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                Hover me
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;" @click="quit">退出</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: $headBg;
}
</style>
