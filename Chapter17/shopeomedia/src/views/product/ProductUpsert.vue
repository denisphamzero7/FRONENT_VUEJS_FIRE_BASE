<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { PRODUCT_CATEGORIES } from '@/constants/appConstants'
import { useSwal } from '@/composible/useSwal'
import productService from '@/services/productService'
import { APP_ROUTE_NAMES } from '@/constants/routeName'
import { uploadToCloudinary } from '@/utility/cloudinary'
const { showSuccess, showError } = useSwal()
const router = useRouter()
const route = useRoute()

const loading = ref(false)
const isImageUploading = ref(false)
const errorList = ref<string[]>([])

const productObj = reactive({
  name: '',
  description: '',
  price: 0,
  salePrice: null as number | null,
  tags: '', // comma-separated string for v-model
  isSale: false,
  isBestseller: false,
  image: 'https://placehold.co/600x400',
  category: '',
})

const productId = (route.params.id as string) || ''

function normalizeResponse<T>(res: any): T | null {
  if (!res) return null
  return res.data ?? res
}

const fetchProductById = async (id: string) => {
  loading.value = true
  try {
    const res = await productService.getProduct(id)
    const product = normalizeResponse<any>(res)
    if (!product) {
      showError('Không tìm thấy sản phẩm')
      return
    }

    productObj.name = product.name ?? ''
    productObj.description = product.description ?? ''
    productObj.price = Number(product.price ?? 0)
    productObj.salePrice = product.salePrice != null ? Number(product.salePrice) : null

    if (Array.isArray(product.tags)) {
      productObj.tags = product.tags.length > 0 ? product.tags.join(', ') : ''
    } else {
      productObj.tags = product.tags ?? ''
    }

    productObj.isBestseller = Boolean(product.bestseller ?? product.isBestseller ?? false)
    productObj.isSale = Boolean(product.isSale ?? false)
    productObj.image = product.image ?? productObj.image
    productObj.category = product.category ?? ''
  } catch (err) {
    showError('Failed to fetch product details')
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (productId) {
    fetchProductById(productId)
  }
})

const handleSubmit = async () => {
  loading.value = true
  try {
    errorList.value = []

    if (!productObj.name || productObj.name.trim().length < 3) {
      errorList.value.push('Tên nên nhiều hơn 3 ký tự')
    }
    if (Number(productObj.price) < 0) {
      errorList.value.push('Giá phải lớn hơn hoặc bằng 0')
    }
    if (productObj.salePrice != null && Number(productObj.salePrice) < 0) {
      errorList.value.push('Sale Price cannot be negative')
    }
    if (!productObj.category) {
      errorList.value.push('Hãy chọn một danh mục')
    }

    if (errorList.value.length > 0) {
      return
    }

    const productData = {
      name: productObj.name,
      description: productObj.description,
      price: Number(productObj.price),
      salePrice: productObj.salePrice != null ? Number(productObj.salePrice) : null,
      tags:
        productObj.tags && productObj.tags.trim().length > 0
          ? productObj.tags
              .split(',')
              .map((t) => t.trim())
              .filter(Boolean)
          : [],
      bestseller: Boolean(productObj.isBestseller),
      isSale: Boolean(productObj.isSale),
      image: productObj.image,
      category: productObj.category,
    }

    if (productId) {
      await productService.updateProduct(productId, productData)
      showSuccess('Cập nhật sản phẩm thành công!')
    } else {
      await productService.createProduct(productData)
      showSuccess('Tạo sản phẩm thành công!')
    }

    router.push({ name: APP_ROUTE_NAMES.PRODUCT_LIST })
  } catch (err) {
    console.error('Error submitting product:', err)
    showError('Có lỗi xảy ra khi lưu sản phẩm')
  } finally {
    loading.value = false
  }
}
const handleImageUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) {
    showError('No file selected')
    isImageUploading.value = false
    return
  }
  try {
    isImageUploading.value = true
    const imageUrl = await uploadToCloudinary(file)
    productObj.image = imageUrl
  } catch (e) {
    console.log(e)
    throw e
  } finally {
    isImageUploading.value = false
  }
}
</script>

<template>
  <div class="container py-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-8">
            <h2 class="card-title text-success mb-3">
              {{ productId ? 'Edit Product' : 'Create Product' }}
            </h2>

            <!-- Validation errors -->
            <div v-if="errorList.length" class="alert alert-danger" role="alert">
              <h6 class="alert-heading mb-2">Làm ơn sửa lỗi sau:</h6>
              <ul class="mb-0">
                <li v-for="(err, idx) in errorList" :key="idx">{{ err }}</li>
              </ul>
            </div>

            <form @submit.prevent="handleSubmit" novalidate>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input id="name" v-model.trim="productObj.name" type="text" class="form-control" />
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                  id="description"
                  v-model="productObj.description"
                  class="form-control"
                  rows="4"
                ></textarea>
              </div>

              <div class="row g-3">
                <div class="col-md-6">
                  <label for="price" class="form-label">Price</label>
                  <input
                    id="price"
                    v-model.number="productObj.price"
                    type="number"
                    class="form-control"
                  />
                </div>
                <div class="col-md-6">
                  <label for="salePrice" class="form-label">Sale Price</label>
                  <input
                    id="salePrice"
                    v-model.number="productObj.salePrice"
                    type="number"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="mb-3 mt-3">
                <label for="tags" class="form-label">Tags (comma-separated)</label>
                <input
                  id="tags"
                  v-model="productObj.tags"
                  type="text"
                  class="form-control"
                  placeholder="e.g. modern, luxury"
                />
                <div class="form-text">Separate tags with commas.</div>
              </div>

              <div class="form-check form-switch mb-3">
                <input
                  id="bestseller"
                  class="form-check-input"
                  type="checkbox"
                  v-model="productObj.isBestseller"
                />
                <label class="form-check-label" for="bestseller">Bestseller</label>
              </div>

              <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <select
                  id="category"
                  v-model="productObj.category"
                  class="form-select"
                  aria-label="Product category"
                >
                  <option value="" disabled>Choose a category</option>
                  <option v-for="cat in PRODUCT_CATEGORIES" :key="cat" :value="cat">
                    {{ cat }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label class="form-label">Image</label>
                <input
                  class="form-control"
                  @change="handleImageUpload"
                  :disabled="isImageUploading"
                  type="file"
                  aria-label="Upload product image"
                />
                <div class="form-text">
                  File upload not implemented — image URL will be used as preview.
                </div>
              </div>

              <div class="d-flex gap-2 mt-4">
                <button
                  type="submit"
                  class="btn btn-success"
                  :disabled="loading || isImageUploading"
                >
                  <span
                    v-if="loading || isImageUploading"
                    class="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  {{ loading ? 'Submitting...' : productId ? 'Update' : 'Create' }}
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="router.push({ name: APP_ROUTE_NAMES.PRODUCT_LIST })"
                  :disabled="loading"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          <div class="col-lg-4 border-start d-flex flex-column align-items-center">
            <div class="text-center w-100 py-3">
              <div class="mb-2 text-muted">Image Preview</div>
              <img
                :src="productObj.image || 'https://placehold.co/600x400'"
                alt="Product preview"
                class="img-fluid rounded mb-3"
                style="max-height: 300px; object-fit: cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 991.98px) {
  .border-start {
    border-left: 0 !important;
    border-top: 1px solid #e9ecef;
  }
}
</style>
