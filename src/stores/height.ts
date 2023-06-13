import { ref } from 'vue'
import { defineStore } from 'pinia'
import { watch } from 'vue'

export const useHeightStore = defineStore('height', () => {
  const appContainerHeight = ref(800)
  const appHeaderHeight = ref(100)
  const appMainSearchBarHeight = ref(72)
  const appMainLeaderHeight = ref(170)

  const appMainPostHeight = ref(450)

  function setAppContainerHeight(height: number) {
    appContainerHeight.value = height
  }

  function setAppMainPostHeight() {
    appMainPostHeight.value =
      appContainerHeight.value -
      appHeaderHeight.value -
      appMainSearchBarHeight.value -
      appMainLeaderHeight.value -
      20
  }

  return {
    appContainerHeight,
    appHeaderHeight,
    appMainSearchBarHeight,
    appMainLeaderHeight,
    appMainPostHeight,
    setAppContainerHeight,
    setAppMainPostHeight
  }
})

// export function useHeightStoreWatcher(HeightStore: any) {
//   watch(
//     () => HeightStore.appContainerHeight,
//     (newVal, oldVal) => {
//       console.log('appContainerHeight', newVal, oldVal)
//       // setAppContainerHeight(height)
//       HeightStore.setAppMainPostHeight()
//     }
//   )
// }
