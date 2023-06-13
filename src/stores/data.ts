import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const leaderData = ref({})
  const postData = ref({})

  function setLeaderData(data: object) {
    leaderData.value = data
  }

  function setPostData(data: object) {
    postData.value = data
  }

  return { leaderData, setLeaderData, postData, setPostData }
})
