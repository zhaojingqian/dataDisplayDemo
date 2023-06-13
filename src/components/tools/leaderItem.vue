<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="leader-item">
    <el-image
      class="leader-item-image"
      style="width: 50px; height: 50px; border-radius: 50%"
      :src="image"
      fit="cover"
    />
    <div class="leader-item-id">{{ id }}</div>
  </div>
</template>

<style scoped>
.leader-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.leader-item-id {
  padding: 10px 20px;
  font-family: 'Times New Roman', Times, serif;
}
</style>
