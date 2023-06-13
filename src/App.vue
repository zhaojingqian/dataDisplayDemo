<script setup lang="ts">
// import { ref, onMounted, onBeforeUnmount } from 'vue'

import appMain from './components/appMain.vue'

// import { useHeightStore } from '@/stores/height'
// const heightStore = useHeightStore()

// const appContainer = ref<HTMLElement>()

// onMounted(() => {
//   window.addEventListener('resize', () => {
//     heightStore.setAppContainerHeight(appContainer.value.offsetHeight)
//   })
// })

// onBeforeUnmount(() => {
//   window.removeEventListener('resize', () => {
//     heightStore.setAppContainerHeight(appContainer.value.offsetHeight)
//   })
// })
</script>

<template>
  <div class="app-container" ref="appContainer">
    <el-container>
      <el-header> DATA DISPLAY DEMO </el-header>
      <el-main>
        <appMain />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.app-container {
  height: 100%;
}
.app-container .el-header {
  position: relative;
  /* background-color: var(--el-color-primary-light-7); */
  /* color: var(--el-text-color-primary); */
  font-size: 30px;
  text-align: center;

  /* 字体加粗 */
  font-weight: 1000;
  /* 字体花体 */
  font-family: 'Times New Roman', Times, serif;
  line-height: 60px;

  gap: 10px;

  margin: 20px 0;
}

.app-container .el-main {
  display: flex;
  flex-direction: column;
  position: relative;
}

.app-container .el-container is-vertical {
  height: 100%;
}
</style>
