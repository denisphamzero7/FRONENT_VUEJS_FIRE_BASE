<template>
  <div class="card">
    <div class="card-header bg-primary text-white">
      <h3 class="h5 mb-0">Scoped Slots Demo</h3>
    </div>
    <div class="card-body">
      <p class="text-muted">Component này sở hữu dữ liệu và truyền nó cho slot con.</p>
      
      <div class="items-container">
        <div v-for="(item, index) in items" :key="index" class="item-wrapper">
          <slot name="item" :item="item" :index="index">
            <div class="d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded">
              <span class="fw-bold">{{ index + 1 }}. {{ item.name }}</span>
              <span class="badge bg-primary">{{ item.price }}đ</span>
            </div>
          </slot>
        </div>
      </div>
      
      <div class="alert alert-info mt-3">
        <strong>Giải thích:</strong>
        <p class="mb-0">Component cha sở hữu dữ liệu (items), nhưng component con quyết định cách hiển thị. Đây là nguyên tắc "Ai sở hữu dữ liệu".</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define the items data
const items = ref([
  { name: 'Áo thun nam', price: 150000 },
  { name: 'Quần jean nữ', price: 350000 },
  { name: 'Giày thể thao', price: 450000 },
  { name: 'Túi xách da', price: 550000 },
  { name: 'Mũ bóng chày', price: 120000 }
])
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 