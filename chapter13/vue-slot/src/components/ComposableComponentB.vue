<template>
  <div class="card h-100">
    <div class="card-header bg-gradient text-white" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%) !important;">
      <h3 class="h5 mb-0">Component B - Sử dụng Composable</h3>
    </div>
    <div class="card-body">
      <p class="text-muted">Component này cũng sử dụng useCounter composable.</p>
      
      <div class="alert alert-light">
        <p class="mb-1">Bộ đếm: <strong class="text-primary">{{ count }}</strong></p>
        <p class="mb-0">Gấp đôi: <strong class="text-success">{{ doubleCount }}</strong></p>
      </div>
      
      <div class="btn-group d-flex" role="group">
        <button @click="increment" class="btn btn-outline-info">+</button>
        <button @click="decrement" class="btn btn-outline-info">-</button>
        <button @click="reset" class="btn btn-outline-secondary">Reset</button>
      </div>
      
      <div class="mt-3 text-center">
        <small class="text-muted">Mỗi component có state riêng biệt</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounter } from '../composables/useCounter.js'

const { count, doubleCount, increment, decrement, reset } = useCounter(10)
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 