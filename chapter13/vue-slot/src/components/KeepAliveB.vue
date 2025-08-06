<template>
  <div class="card">
    <div class="card-header bg-danger text-white">
      <h3 class="h5 mb-0">Keep Alive Component B</h3>
    </div>
    <div class="card-body">
      <p class="text-muted">Component này cũng sẽ được giữ lại trạng thái khi chuyển đổi.</p>
      
      <div class="alert alert-light">
        <label class="form-label">Nhập văn bản:</label>
        <input v-model="text" placeholder="Nhập gì đó..." class="form-control mb-2" />
        <p class="mb-0">Văn bản đã nhập: <strong class="text-primary">{{ text }}</strong></p>
      </div>
      
      <div class="alert alert-info">
        <strong>Lưu ý:</strong>
        <p class="mb-0">Văn bản bạn nhập sẽ được giữ lại khi chuyển đổi component và quay lại.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeepAliveB',
  data() {
    return {
      text: ''
    }
  },
  mounted() {
    console.log('KeepAliveB mounted')
  }
}
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 