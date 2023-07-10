<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import leaderItem from '../tools/leaderItem.vue'
const store = useDataStore()
const { t } = useI18n()
const leaderData = computed(() => store.leaderData)
</script>

<template>
  <div class="leaderlist" v-show="leaderData">
    <div class="leaderlist-title">{{$t('main.leaderboard.title')}}</div>
    <el-scrollbar>
      <div class="leaderlist-items">
        <div class="leaderlist-item" v-for="leader in leaderData" :key="leader.user_id">
          <!-- <div class="leaderlist-item-id">{{ leader.user_id }}</div>
        <el-image style="width: 50px; height: 50px" :src="leader.user_img" :fit="fit" /> -->
          <leaderItem :id="leader.user_id" :image="leader.user_img" :url="leader.user_url"/>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.leaderlist {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 3% 10%;
}

.leaderlist-title {
  position: relative;

  /* 字体加粗 */
  font-weight: 100;
  /* 字体花体 */
  font-family: 'Times New Roman', '黑体', serif;

  border-bottom: solid 2px var(--el-menu-border-color);

  height: 25px;
}

.leaderlist-items {
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 10px 0;
  gap: 30px;
}

.leaderlist-item {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  gap: 20px;

  border-radius: 5px;
  border: solid 3px var(--el-menu-border-color);
}
</style>
