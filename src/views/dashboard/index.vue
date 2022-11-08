<script setup lang="ts" name="dashboard">
import { reactive, ref } from 'vue'
</script>

<template>
  <h1>dashboard</h1>
  <svg-icon icon-class="tree"></svg-icon>
  <div v-for="item in 30">{{ item }}</div>
</template>

<style scoped lang="less"></style>
