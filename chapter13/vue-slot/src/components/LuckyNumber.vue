<template>
  <div class="card">
    <div class="card-header bg-warning text-dark text-center">
      <slot name="header">
        <h3 class="h5 mb-0">🎲 Số May Mắn Hôm Nay</h3>
      </slot>
    </div>
    
    <div class="card-body">
      <div class="text-center mb-3">
        <div class="display-4 text-primary fw-bold">{{ luckyNumber }}</div>
        <p class="text-muted">Số may mắn của bạn</p>
      </div>
      
      <slot name="description">
        <p class="text-center">Hãy sử dụng số này để mua vé số hoặc đặt cược nhé! 🍀</p>
      </slot>
      
      <div class="d-grid gap-2">
        <button @click="generateNumber" class="btn btn-success">
          <i class="bi bi-shuffle"></i> Tạo Số Mới
        </button>
        <button @click="saveNumber" class="btn btn-outline-primary">
          <i class="bi bi-bookmark"></i> Lưu Số Này
        </button>
      </div>
    </div>
    
    <div class="card-footer bg-light">
      <slot name="footer">
        <div class="row text-center">
          <div class="col-6">
            <small class="text-muted">Đã tạo: {{ generateCount }} lần</small>
          </div>
          <div class="col-6">
            <small class="text-muted">Đã lưu: {{ savedNumbers.length }} số</small>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const luckyNumber = ref(Math.floor(Math.random() * 100) + 1)
const generateCount = ref(1)
const savedNumbers = ref([])

const generateNumber = () => {
  luckyNumber.value = Math.floor(Math.random() * 100) + 1
  generateCount.value++
}

const saveNumber = () => {
  if (!savedNumbers.value.includes(luckyNumber.value)) {
    savedNumbers.value.push(luckyNumber.value)
  }
}
</script>

<style scoped>
/* Component uses Bootstrap classes */
</style> 