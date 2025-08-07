<script setup>
import axios from 'axios'
import { reactive, toRefs, onMounted } from 'vue'

const state = reactive({
  destinations: [],
  loading: false,
  error: null
})

const { destinations, loading, error } = toRefs(state)

async function getDestinations() {
  state.loading = true
  state.error = null

  try {
    // 1) Gọi API
    const response = await axios.get('http://localhost:3000/destination')

    // 2) Giả lập delay 2s
    await new Promise(resolve => setTimeout(resolve, 2000))

    // 3) Lưu data
    state.destinations = response.data

  } catch (err) {
    state.error = err

  } finally {
    // 4) Kết thúc loading
    state.loading = false
  }
}

onMounted(getDestinations)
</script>

<template>
  <div class="container bg-gray p-4">
    <h1 class="text-primary text-center mb-4">Travel Việt Nam</h1>

    <!-- Spinner -->
    <div class="text-center mb-3">
      <span v-if="loading" class="spinner-border text-primary" role="status"></span>
    </div>

    <!-- Error -->
    <div v-if="error" class="alert alert-danger">
      Error: {{ error.message }}
    </div>

    <!-- Table chỉ hiển thị khi có data và không đang loading -->
    <table
      v-if="!loading && !error && destinations.length"
      class="table table-striped table-light"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Days</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in destinations" :key="d.id">
          <td>{{ d.name }}</td>
          <td>{{ d.day }}</td>
          <td>{{ d.price }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Nếu không có data sau khi load -->
    <div v-if="!loading && !error && destinations.length === 0" class="text-center">
      Không có điểm đến nào.
    </div>

    <!-- Nút refresh nếu muốn -->
    <div class="text-center mt-3">
      <button @click="getDestinations" class="btn btn-primary">
        Reload
      </button>
    </div>
  </div>
</template>
