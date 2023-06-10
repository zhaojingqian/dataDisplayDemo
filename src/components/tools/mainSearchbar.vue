<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

import { useDataStore } from '@/stores/data'
const store = useDataStore()

const keywords = ref('')
const type = ref('')

const querySearch = (keywords: string, type: string) => {
  console.log(keywords, type)
  fetch('C:\\Users\\30409\\Desktop\\dataDisplayDemo\\src\\components\\lists\\leaders.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    store.setLeaderData(data)
  })
  .catch(error => console.log(error))

}
</script>

<template>
  <div class="searchbar">
    <el-input 
      v-model="keywords" 
      placeholder="Search" 
      class="searchbar-input"
    > 
    <template #prepend>
      <el-select 
        v-model="type"
        placeholder="Select"
        class="searchbar-select"
        style="width: 120px"
      >
        <el-option label="Twitter" value="1" />
        <el-option label="Facebook" value="2" />
        <el-option label="Reddit" value="3" />
      </el-select>
    </template>
    <template #append>
      <el-button
        :icon="Search"
        @click="querySearch(keywords, type)"
        style="width: 60px"
      >
      </el-button>
    </template>
  </el-input>
  </div>
</template>

<style scoped>
.searchbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  margin: 10px 0;
}

.searchbar-input {
  width: 80%;
}
</style>
