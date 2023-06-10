import { ref, computed } from 'vue'
import { defineStore} from 'pinia'

export const useDataStore = defineStore('data', () => {
    const leaderData = ref(null)

    function setLeaderData(data: any) {
        leaderData.value = data
    }

    return { leaderData, setLeaderData }
})