<template>
  <div class="card">
    <div class="card-header bg-success text-white">
      <h3 class="h5 mb-0">Demo Vòng Đời Component</h3>
    </div>
    <div class="card-body">
      <p class="text-muted">Component này minh họa các lifecycle hooks của Vue.js</p>
      
      <div class="mb-3">
        <h4 class="h6">Lịch sử vòng đời:</h4>
        <div class="border rounded p-3" style="max-height: 200px; overflow-y: auto;">
          <div v-for="(log, index) in lifecycleLogs" :key="index" class="d-flex justify-content-between border-bottom pb-2 mb-2">
            <span class="fw-bold text-warning">{{ log.time }}</span>
            <span class="ms-2">{{ log.message }}</span>
          </div>
        </div>
      </div>
      
      <div class="mb-3">
        <button @click="addLog('Thêm log thủ công')" class="btn btn-outline-success btn-sm me-2">Thêm Log</button>
        <button @click="clearLogs" class="btn btn-outline-secondary btn-sm">Xóa Logs</button>
      </div>
      
      <div class="alert alert-info">
        <strong>Các lifecycle hooks chính:</strong>
        <ul class="mb-0 mt-2">
          <li><strong>beforeCreate:</strong> Trước khi tạo instance</li>
          <li><strong>created:</strong> Sau khi tạo instance</li>
          <li><strong>beforeMount:</strong> Trước khi mount DOM</li>
          <li><strong>mounted:</strong> Sau khi mount DOM</li>
          <li><strong>beforeUpdate:</strong> Trước khi update</li>
          <li><strong>updated:</strong> Sau khi update</li>
          <li><strong>beforeUnmount:</strong> Trước khi unmount</li>
          <li><strong>unmounted:</strong> Sau khi unmount</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifecycleDemo',
  data() {
    return {
      lifecycleLogs: []
    }
  },
  beforeCreate() {
    this.addLog('beforeCreate - Trước khi tạo instance')
  },
  created() {
    this.addLog('created - Sau khi tạo instance')
  },
  beforeMount() {
    this.addLog('beforeMount - Trước khi mount DOM')
  },
  mounted() {
    this.addLog('mounted - Sau khi mount DOM')
  },
  beforeUpdate() {
    this.addLog('beforeUpdate - Trước khi update')
  },
  updated() {
    this.addLog('updated - Sau khi update')
  },
  beforeUnmount() {
    this.addLog('beforeUnmount - Trước khi unmount')
  },
  unmounted() {
    this.addLog('unmounted - Sau khi unmount')
  },
  methods: {
    addLog(message) {
      const time = new Date().toLocaleTimeString()
      this.lifecycleLogs.push({ time, message })
    },
    clearLogs() {
      this.lifecycleLogs = []
    }
  }
}
</script>

<style scoped>
/* Component now uses Bootstrap classes, no custom CSS needed */
</style> 