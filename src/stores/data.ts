import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const leaderData = ref(null)
  const postData = ref(null)
  const language = ref('zh')

  function setLeaderData(data: any) {
    leaderData.value = data
  }

  function setPostData(data: any) {
    postData.value = data
  }

  function setLanguage(data: string) {
    language.value = data
  }

  return { leaderData, setLeaderData, postData, setPostData, language, setLanguage }
})
