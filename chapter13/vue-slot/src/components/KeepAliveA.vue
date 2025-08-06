<template>
  <div class="card">
    <div class="card-header bg-primary text-white">
      <h3 class="h5 mb-0">Keep Alive Component A</h3>
    </div>
    <div class="card-body">
      <p class="text-muted">Component này sẽ được giữ lại trạng thái khi chuyển đổi.</p>
      
      <div class="alert alert-light">
        <p class="mb-2">Bộ đếm: <strong class="text-primary">{{ counter }}</strong></p>
        <div class="btn-group btn-group-sm">
          <button @click="counter++" class="btn btn-outline-primary">Tăng</button>
          <button @click="counter--" class="btn btn-outline-primary">Giảm</button>
        </div>
      </div>
      
      <div class="alert alert-info">
        <strong>Lưu ý:</strong>
        <p class="mb-0">Khi bạn chuyển sang component khác và quay lại, bộ đếm sẽ vẫn giữ nguyên giá trị nhờ Keep Alive.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeepAliveA',
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    console.log('KeepAliveA mounted')
  }
}
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 