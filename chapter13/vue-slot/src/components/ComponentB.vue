<template>
  <div class="card">
    <div class="card-header bg-info text-white">
      <h3 class="h5 mb-0">Component B</h3>
    </div>
    <div class="card-body">
      <p class="text-muted">Đây là nội dung Component B. Nó minh họa việc chuyển đổi component động.</p>
      <div class="alert alert-light">
        <strong>Tính năng:</strong>
        <ul class="mb-0 mt-2">
          <li>Render component động</li>
          <li>Chuyển đổi component</li>
          <li>Nội dung phản ứng</li>
        </ul>
      </div>
      <p class="text-success">✅ Component B đang hoạt động!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentB',
  mounted() {
    console.log('ComponentB mounted')
  }
}
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 