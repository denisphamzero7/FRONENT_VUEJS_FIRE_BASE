<template>
  <div class="card">
    <div class="card-header bg-primary text-white text-center">
      <slot name="header">
        <h3 class="h5 mb-0">Header mặc định</h3>
      </slot>
    </div>
    
    <div class="card-body bg-light">
      <slot>
        <p class="text-muted mb-0">Nội dung mặc định</p>
      </slot>
    </div>
    
    <div class="card-footer text-center bg-secondary text-white">
      <slot name="footer">
        <p class="mb-0">Footer mặc định</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
// No TypeScript needed for slots in JavaScript
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 