<script setup lang="ts">
import productService from '@/services/productService';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { APP_ROUTE_NAMES } from '@/constants/routeName';
import router from '@/router';


const products = ref([]);
const loading = ref(false);
const error = ref(null);
onMounted(() => {
   fetchProducts()
});

const fetchProducts = async () => {
    loading.value = true;
    try {
        products.value = await productService.getProducts();
        error.value = null;
    } catch (err) {
        error.value = 'Failed to fetch products';
        console.error(err);
    } finally {
        loading.value = false;
    }
};
async function onDelete(id: string) {
  if (!confirm('Bạn có chắc muốn xóa sản phẩm này?')) return

  try {
    await productService.deleteProduct(id)
    // Refresh list
    await fetchProducts()
  } catch (err) {
    console.error(err)
    alert('Xóa thất bại!')
  }
}
function goCreate() {
  router.push({ name: APP_ROUTE_NAMES.PRODUCT_CREATE })
}

// Navigate to edit page
function goEdit(id: string) {
  router.push({ name: APP_ROUTE_NAMES.PRODUCT_UPDATE, params: { id } })
}
</script>

<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1>Product List</h1>
      <button class="btn btn-success" @click="goCreate">
        <i class="bi bi-plus"></i> Tạo mới
      </button>
    </div>

    <div v-if="loading" class="text-center">Loading…</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <table v-if="!loading && !error && products.length" class="table table-striped">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Sale Price</th>
          <th>Category</th>
          <th>Bestseller</th>
          <th>Tags</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <img
              :src="product.image"
              alt="Product Image"
              class="img-fluid rounded"
              style="width: 50px; height: 50px; object-fit: cover;"
            />
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.salePrice }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.isBestseller ? 'Yes' : 'No' }}</td>
          <td>
            <span
              v-for="tag in product.tags"
              :key="tag"
              class="badge bg-secondary me-1"
            >
              {{ tag }}
            </span>
          </td>
          <td>
            <button
              class="btn btn-sm btn-primary me-2"
              @click="goEdit(product.id)"
            >
              Edit
            </button>
            <button
              class="btn btn-sm btn-danger"
              @click="onDelete(product.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="!loading && !error && !products.length" class="text-center">
      Không có sản phẩm nào.
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>