<script setup lang="ts">
import ProductCard from '@/components/Product/ProductCard.vue';
import productService from '@/services/productService';
import { ref, onMounted, computed } from 'vue';
import {
  PRODUCT_CATEGORIES,
  SORT_OPTIONS,
  SORT_PRICE_LOW_HIGHT,
  SORT_PRICE_HIGHT_LOW,
  SORT_NAME_A_Z,
  SORT_NAME_Z_A
} from '@/constants/appConstants';

interface Product {
  id: string | number;
  name?: string;
  description?: string;
  category?: string | null;
  price?: number | string;
  tags?: string[] | string;
  [key: string]: any;
}

const products = ref<Product[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const selectedCategory = ref<string>('ALL');
const categoryList = ref<string[]>(['ALL', ...PRODUCT_CATEGORIES]);

onMounted(() => {
  fetchProducts();
});

const fetchProducts = async () => {
  loading.value = true;
  try {
    const res = await productService.getProducts();
    products.value = Array.isArray(res) ? res : (res?.data ?? []);
    error.value = null;
  } catch (err) {
    error.value = 'Failed to fetch products';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

// Search
const searchQuery = ref('');
const searchInputRef = ref<HTMLInputElement | null>(null);
function onSearchBtnClick() {
  if (searchQuery.value) {
    searchQuery.value = '';
    searchInputRef.value?.focus();
  } else {
    searchInputRef.value?.focus();
  }
}

// sắp xếp
const sortSelected = ref<string>(SORT_OPTIONS[0] ?? '');


const filteredProductList = computed(() => {
  const list = products.value ?? [];
  const cat = (selectedCategory.value ?? 'ALL').toUpperCase();


  let result = cat === 'ALL'
    ? [...list]
    : list.filter((p) => String(p.category ?? '').toUpperCase() === cat);


  const q = (searchQuery.value ?? '').trim().toLowerCase();
  if (q) {
    result = result.filter((item) => {
      const name = String(item.name ?? '').toLowerCase();
      const desc = String(item.description ?? '').toLowerCase();
      let tagsStr = '';
      if (Array.isArray(item.tags)) tagsStr = item.tags.join(' ').toLowerCase();
      else tagsStr = String(item.tags ?? '').toLowerCase();
      return name.includes(q) || desc.includes(q) || tagsStr.includes(q);
    });
  }


  const sortKey = sortSelected.value;
  const sorted = [...result].sort((a, b) => {

    if (sortKey === SORT_PRICE_LOW_HIGHT) {
      const pa = Number(a.price ?? 0);
      const pb = Number(b.price ?? 0);
      return pa - pb;
    }
    if (sortKey === SORT_PRICE_HIGHT_LOW) {
      const pa = Number(a.price ?? 0);
      const pb = Number(b.price ?? 0);
      return pb - pa;
    }
    if (sortKey === SORT_NAME_A_Z) {
      const na = String(a.name ?? '').localeCompare(String(b.name ?? ''), undefined, { sensitivity: 'base' });
      return na;
    }
    if (sortKey === SORT_NAME_Z_A) {
      const na = String(a.name ?? '').localeCompare(String(b.name ?? ''), undefined, { sensitivity: 'base' });
      return -na;
    }
    return 0; 
  });

  return sorted;
});
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="bg-success w-100 position-relative overflow-hidden mb-4 py-5 d-flex align-items-center">
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-50"></div>
      <div class="container-fluid position-relative" style="z-index:1">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8 col-xl-7">
            <h1 class="display-4 fw-bold text-center text-white">
              Bạn không ngừng mua sắm, chúng tôi không ngừng phục vụ
              <br class="d-none d-lg-block" />
              <span class="text-warning">Chào mừng bạn đến với Shopeomedia</span>
            </h1>

            <!-- Search -->
            <div class="input-group mt-3 mx-auto shadow-lg rounded-4" style="max-width: 700px;">
              <input
                ref="searchInputRef"
                v-model.trim="searchQuery"
                type="text"
                class="form-control"
                placeholder="Tìm kiếm sản phẩm theo tên, mô tả hoặc tags..."
                aria-label="Search products"
              />
              <button class="btn btn-warning" type="button" @click="onSearchBtnClick">
                <span v-if="searchQuery">Clear</span>
                <span v-else>Tìm kiếm</span>
              </button>
            </div>

            <div class="mt-2 text-light small">
              <span v-if="searchQuery">Kết quả cho: "<strong>{{ searchQuery }}</strong>" — </span>
              <span>{{ filteredProductList.length }} sản phẩm</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h1 class="h3 mb-0">Danh sách sản phẩm</h1>

        <div class="d-flex gap-2 align-items-center">
          <!-- category buttons -->
          <div class="btn-group" role="group" aria-label="Categories">
            <button
              v-for="(category, index) in categoryList"
              :key="category + index"
              @click="selectedCategory = category"
              type="button"
              class="btn px-3 py-2"
              :class="category === selectedCategory ? 'btn-success text-white' : 'btn-outline-success'"
            >
              {{ category }}
            </button>
          </div>

          <!-- sort select -->
          <div class="ms-2">
            <label class="form-label mb-0 small text-muted">Sắp xếp</label>
            <select class="form-select form-select-sm" v-model="sortSelected" style="min-width: 180px;">
              <option v-for="(opt, idx) in SORT_OPTIONS" :key="opt + idx" :value="opt">
                {{ opt }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- loading / error -->
      <div v-if="loading" class="text-center my-5">
        <div class="spinner-border text-success" role="status" aria-hidden="true"></div>
        <div class="mt-2 text-muted">Đang tải sản phẩm…</div>
      </div>

      <div v-else-if="error" class="alert alert-danger">
        {{ error }}
      </div>

      <!-- product grid -->
      <div v-else>
        <div v-if="filteredProductList.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
          <ProductCard
            v-for="(product, idx) in filteredProductList"
            :key="product.id ?? idx"
            :product="product"
          />
        </div>

        <div v-else class="text-center text-muted my-5">
          Không có sản phẩm nào trong danh mục / tìm kiếm này.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.position-relative { z-index: 0; }
</style>
