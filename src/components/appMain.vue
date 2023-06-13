<script setup lang="ts">
import { ref } from 'vue'

import searchBar from './tools/mainSearchbar.vue'
import leaderList from './lists/mainLeaders.vue'
import postList from './lists/mainPosts.vue'

// const mainSearchBar = ref<HTMLElement>()
// const mainLeaderList = ref<HTMLElement>()
</script>

<template>
  <div class="main-searchbar" ref="mainSearchBar"><searchBar /></div>
  <div class="main-leaderlist" ref="mainLeaderList"><leaderList /></div>
  <div class="main-postlist"><postList /></div>
</template>

<style scoped>
</style>
