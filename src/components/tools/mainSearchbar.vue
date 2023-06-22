<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

import { useDataStore } from '@/stores/data'

import axios from 'axios'

const store = useDataStore()

const keywords = ref('')
const type = ref('')

const keyDict = {
  1: 'twitter',
  2: 'facebook',
  3: 'reddit',
}

const querySearch = async (keywords: string, type: string) => {
  console.log(keywords, type)
  let urlString = 'http://192.168.43.156:5000/' + keyDict[type]
  console.log(urlString)
  await axios
    .post(urlString, { keywords: keywords })
    .then((res) => {
      console.log(res.data)
      store.setLeaderData(res.data['leaders'])
      store.setPostData(res.data['posts'])
    })
    .catch((err) => {
      console.log(err)
    })

  // await axios
  //   .get('/static/leaders.json')
  //   .then((res) => {
  //     store.setLeaderData(res.data)
  //     console.log(store.leaderData.length)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  // await axios
  //   .get('/static/posts.json')
  //   .then((res) => {
  //     store.setPostData(res.data)
  //     console.log(store.postData.length)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // try {
  //   const { data: resData } = axios.get('/static/leaders.json')
  //   console.log(resData)
  //   if (resData.length > 0) {
  //     console.log(resData)
  //     store.setLeaderData(resData)
  //   }
  // } catch (err) {
  //   console.log(err)
  // }
}
</script>

<template>
  <div class="searchbar">
    <el-input v-model="keywords" placeholder="Search" class="searchbar-input">
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
        <el-button :icon="Search" :disabled="type==='' || keywords===''" @click="querySearch(keywords, type)" style="width: 60px">
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
  margin: 20px 0;
}

.searchbar-input {
  width: 80%;
}
</style>
