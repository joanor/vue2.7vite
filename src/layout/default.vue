<template>
  <div class="overflow-hidden">
    <!-- Header -->
    <LayoutHeader></LayoutHeader>

    <!-- 面包屑 -->
    <LayoutBreadCrumb></LayoutBreadCrumb>

    <!-- 主体内容 -->
    <LayoutContainer>
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view />
        </keep-alive>
      </transition>
    </LayoutContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutBreadCrumb from './components/LayoutBreadCrumb.vue'
import LayoutContainer from './components/LayoutContainer.vue'
const cachedViews = ref(true)
</script>

<style lang="scss" scoped></style>
