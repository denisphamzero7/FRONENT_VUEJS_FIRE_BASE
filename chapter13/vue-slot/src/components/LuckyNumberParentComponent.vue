<template>
  <div class="card">
    <div class="card-header bg-info text-white">
      <h3 class="h4 mb-0">🎯 Demo Slot với Ví Dụ Thực Tế</h3>
    </div>
    <div class="card-body">
      <p class="text-muted mb-4">
        Component cha có thể tùy chỉnh nội dung của component con thông qua slots
      </p>
      
      <!-- Sử dụng LuckyNumber với nội dung tùy chỉnh -->
      <LuckyNumber>
        <template #header>
          <h3 class="h5 mb-0">🍀 Số May Mắn Cho Ngày Hôm Nay</h3>
        </template>
        
        <template #description>
          <div class="alert alert-info">
            <h6 class="alert-heading">💡 Lời Khuyên:</h6>
            <p class="mb-0">Số này được tạo ngẫu nhiên. Hãy sử dụng nó một cách khôn ngoan!</p>
          </div>
        </template>
        
        <template #footer>
          <div class="row text-center">
            <div class="col-4">
              <small class="text-success">🎲 Đã tạo: {{ generateCount }} lần</small>
            </div>
            <div class="col-4">
              <small class="text-primary">💾 Đã lưu: {{ savedCount }} số</small>
            </div>
            <div class="col-4">
              <small class="text-warning">⭐ Rating: 4.5/5</small>
            </div>
          </div>
        </template>
      </LuckyNumber>
      
      <hr class="my-4">
      
      <!-- Sử dụng LuckyNumber với nội dung khác -->
      <LuckyNumber>
        <template #header>
          <h3 class="h5 mb-0">🎰 Số Xổ Số Siêu May Mắn</h3>
        </template>
        
        <template #description>
          <div class="alert alert-warning">
            <h6 class="alert-heading">⚠️ Chú Ý:</h6>
            <p class="mb-0">Chỉ dành cho mục đích giải trí. Không đảm bảo trúng thưởng!</p>
          </div>
        </template>
        
        <template #footer>
          <div class="text-center">
            <small class="text-danger">🔥 Hot: Số này có tỷ lệ trúng cao!</small>
          </div>
        </template>
      </LuckyNumber>
    </div>
  </div>
</template>

<script setup>
import LuckyNumber from './LuckyNumber.vue'
import { ref } from 'vue'

const generateCount = ref(5)
const savedCount = ref(3)
</script>

<style scoped>
/* Component uses Bootstrap classes */
</style> 