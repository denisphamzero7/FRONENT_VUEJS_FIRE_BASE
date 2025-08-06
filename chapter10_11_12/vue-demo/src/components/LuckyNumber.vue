<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps<{ maxNumber: number }>()

// state
const lucky = ref<number|null>(null)

function generate() {
  // random từ 1 đến maxNumber
  lucky.value = Math.floor(Math.random() * props.maxNumber) + 1
}
</script>

<template>
  <button @click="generate" class="btn btn-outline-light btn-sm">
    <template v-if="lucky === null">
      Tạo số may mắn (1–{{ props.maxNumber }})
    </template>
    <template v-else>
      🎲 {{ lucky }} — Chọn để tạo lại
    </template>
  </button>
</template>

<style scoped>
button { font-size: 12px; }
</style>
