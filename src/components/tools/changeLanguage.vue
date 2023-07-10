<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useDataStore } from '@/stores/data'
import { ArrowDown } from '@element-plus/icons-vue'

const { locale, t } = useI18n()
const store = useDataStore()
const language = computed(() => store.language)

const handleSetLanguage = (lang: string) => {
  store.setLanguage(lang)
  locale.value = lang
}
</script>

<template>
  <el-dropdown class="lang-select" trigger="click" @command="handleSetLanguage">
    <!-- <el-button type="primary">
      {{ $t('header.language') }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button> -->
    <span class="el-dropdown-link">
      {{ $t('header.language') }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  /* color: var(--el-color-primary); */
  color: var(--el-text-color-secondary);
  display: flex;
  align-items: center;
  font-family: '黑体', serif;
  font-weight: 100;
  margin-top: 20px;
  margin-right: 30px;
}</style>