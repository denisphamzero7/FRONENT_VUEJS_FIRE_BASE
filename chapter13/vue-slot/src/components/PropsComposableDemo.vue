<template>
  <div class="card">
    <div class="card-header bg-warning text-dark">
      <h3 class="h5 mb-0">Props trong Composables</h3>
    </div>
    <div class="card-body">
      <p class="text-muted">Composable nhận props từ component cha.</p>
      
      <div class="alert alert-light">
        <p class="mb-1">Props nhận được: <strong class="text-primary">{{ initialCount }}</strong></p>
        <p class="mb-1">Giá trị hiện tại: <strong class="text-success">{{ count }}</strong></p>
        <p class="mb-0">Giá trị gấp đôi: <strong class="text-info">{{ doubleCount }}</strong></p>
      </div>
      
      <div class="btn-group mb-3">
        <button @click="increment" class="btn btn-outline-warning">Tăng</button>
        <button @click="decrement" class="btn btn-outline-warning">Giảm</button>
        <button @click="reset" class="btn btn-outline-secondary">Đặt lại về {{ initialCount }}</button>
      </div>
      
      <div class="alert alert-info">
        <strong>Giải thích:</strong>
        <p class="mb-0">Composable useCounter nhận initialCount làm tham số, cho phép component cha truyền giá trị khởi tạo.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounter } from '../composables/useCounter.js'

export default {
  name: 'PropsComposableDemo',
  props: {
    initialCount: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const { count, doubleCount, increment, decrement, reset } = useCounter(props.initialCount)
    
    return {
      count,
      doubleCount,
      increment,
      decrement,
      reset
    }
  }
}
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 