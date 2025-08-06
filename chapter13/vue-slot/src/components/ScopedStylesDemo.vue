<template>
  <div class="card">
    <div class="card-header bg-warning text-dark">
      <h3 class="h5 mb-0">Scoped Styles Demo</h3>
    </div>
    <div class="card-body">
      <p class="text-muted">Component này sử dụng scoped styles để tránh xung đột CSS.</p>
      
      <div class="alert alert-light">
        <h4 class="h6">Ví dụ về Scoped Styles</h4>
        <div class="p-3 bg-white rounded border-start border-warning border-4">
          <p class="mb-2">Đây là một box với style riêng biệt</p>
          <button class="btn btn-warning btn-sm">Nút với style riêng</button>
        </div>
      </div>
      
      <div class="alert alert-info">
        <strong>Lợi ích của Scoped Styles:</strong>
        <ul class="mb-0 mt-2">
          <li>Tránh xung đột CSS giữa các component</li>
          <li>Style chỉ áp dụng cho component hiện tại</li>
          <li>Dễ dàng bảo trì và quản lý</li>
          <li>Tăng tính module hóa</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScopedStylesDemo'
}
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 