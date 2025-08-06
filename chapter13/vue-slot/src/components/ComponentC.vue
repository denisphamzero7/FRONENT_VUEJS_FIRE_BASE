<template>
  <div class="card">
    <div class="card-header bg-warning text-dark">
      <h3 class="h5 mb-0">Component C</h3>
    </div>
    <div class="card-body">
      <p class="text-muted">Đây là nội dung Component C. Nó minh họa việc chuyển đổi component động.</p>
      <div class="alert alert-light">
        <strong>Tính năng:</strong>
        <ul class="mb-0 mt-2">
          <li>Render component động</li>
          <li>Chuyển đổi component</li>
          <li>Nội dung phản ứng</li>
        </ul>
      </div>
      <p class="text-success">✅ Component C đang hoạt động!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentC',
  mounted() {
    console.log('ComponentC mounted')
  }
}
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 