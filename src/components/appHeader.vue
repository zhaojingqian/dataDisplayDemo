<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import changeLanguage from './tools/changeLanguage.vue';
const { t } = useI18n()
</script>

<template>
  <div class="header-title">
    {{ $t('header.title') }}
  </div>
  <changeLanguage class="header-change"/>
</template>

<style scoped>
.header-change {
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  font-weight: 100;
  font-family: 'Times New Roman', '黑体', serif;
  cursor: pointer;
}
</style>