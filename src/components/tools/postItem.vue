<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="post-item">
    <div class="post-item-user">
      {{ id }}
    </div>

    <div class="post-item-time">
      {{ time }}
    </div>

    <div class="post-item-content" style="white-space: pre-line">
      {{ content }}
    </div>
    <el-scrollbar>
    <div class="post-item-image-list">
      <template v-for="(img, idx) in images" :key="idx">
        <!-- <template v-if="idx<3"> -->
          <el-image 
            class="post-item-image" 
            style="width: 200px; height: 200px" 
            :src="img"
            :preview-src-list="images"
            :initial-index="idx"
            fit="cover"
          >
          </el-image>
          <!-- <div>{{ img }}</div> -->
        </template>
      <!-- </template> -->
    </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.post-item {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  /* border-bottom: solid 1px var(--el-menu-border-color); */

  border-radius: 5px;
  border: solid 3px var(--el-menu-border-color);

  gap: 5px;
}

.post-item-user {
  font-family: 'Times New Roman', Times, serif;
  font-weight: 1000;
  font-size: 20px;
}

.post-item-time {
  font-family: 'Times New Roman', Times, serif;
  font-size: 15px;
  color: grey;
}

.post-item-content {
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 30px;
  /* color: grey; */
}

.post-item-image-list {
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;

  gap: 30px
}
</style>
