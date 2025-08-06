<template>
  <div class="card">
    <div class="card-header bg-info text-white">
      <h3 class="h5 mb-0">Demo Composables</h3>
    </div>
    <div class="card-body">
      <p class="text-muted">Composables cho phép tái sử dụng logic giữa các component.</p>
      
      <div class="alert alert-light mb-3">
        <h4 class="h6">Bộ đếm với Composable</h4>
        <div class="mb-2">
          <p class="mb-1">Giá trị hiện tại: <strong class="text-primary">{{ count }}</strong></p>
          <p class="mb-0">Giá trị gấp đôi: <strong class="text-success">{{ doubleCount }}</strong></p>
        </div>
        <div class="btn-group btn-group-sm">
          <button @click="increment" class="btn btn-outline-primary">Tăng</button>
          <button @click="decrement" class="btn btn-outline-primary">Giảm</button>
          <button @click="reset" class="btn btn-outline-secondary">Đặt lại</button>
          <button @click="setValue(10)" class="btn btn-outline-info">Đặt thành 10</button>
        </div>
      </div>
      
      <div class="alert alert-light mb-3">
        <h4 class="h6">Toggle với Composable</h4>
        <div class="mb-2">
          <p class="mb-1">Trạng thái: <strong>{{ status }}</strong></p>
          <div class="badge" :class="isOn ? 'bg-success' : 'bg-danger'">
            {{ isOn ? 'ON' : 'OFF' }}
          </div>
        </div>
        <div class="btn-group btn-group-sm">
          <button @click="toggle" class="btn btn-outline-primary">Chuyển đổi</button>
          <button @click="turnOn" class="btn btn-outline-success">Bật</button>
          <button @click="turnOff" class="btn btn-outline-danger">Tắt</button>
        </div>
      </div>
      
      <div class="alert alert-info">
        <strong>Lợi ích của Composables:</strong>
        <ul class="mb-0 mt-2">
          <li>Tái sử dụng logic giữa các component</li>
          <li>Tách biệt logic khỏi UI</li>
          <li>Dễ dàng test và bảo trì</li>
          <li>Tăng tính module hóa</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounter } from '../composables/useCounter.js'
import { useToggle } from '../composables/useToggle.js'

export default {
  name: 'ComposablesDemo',
  setup() {
    const { count, doubleCount, increment, decrement, reset, setValue } = useCounter(5)
    const { isOn, toggle, turnOn, turnOff, status } = useToggle()
    
    return {
      count,
      doubleCount,
      increment,
      decrement,
      reset,
      setValue,
      isOn,
      toggle,
      turnOn,
      turnOff,
      status
    }
  }
}
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 