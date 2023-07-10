<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import postItem from '../tools/postItem.vue'
const { t } = useI18n()
const store = useDataStore()
const postData = computed(() => store.postData)
</script>

<template>
  <div class="postlist" v-show="postData">
    <div class="postlist-title">{{$t('main.postboard.title')}}</div>
    <el-scrollbar height="450px">
      <div class="postlist-items">
        <div class="postlist-item" v-for="post in postData" :key="post.post_id">
          <postItem :id="post.user_id" :images="post.images" :time="post.time" :content="post.content"
            :url="post.post_url" />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.postlist {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 10%;
}

.postlist-title {
  position: relative;

  /* 字体加粗 */
  font-weight: 100;
  /* 字体花体 */
  font-family: 'Times New Roman', '黑体', serif;

  border-bottom: solid 2px var(--el-menu-border-color);

  height: 25px;
}

.postlist-items {
  display: flex;
  flex-direction: column;
  position: relative;
  /* margin: 10px 0; */
  /* gap: 30px; */
}
</style>
