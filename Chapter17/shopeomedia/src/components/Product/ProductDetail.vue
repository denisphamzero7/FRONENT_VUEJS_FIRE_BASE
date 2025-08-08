<script setup lang="ts">
const props = defineProps<{
  product: {
    id: number
    image: string
    name: string
    description: string
    price: number
    salePrice: number
    category: string
    tags: string[]
    isBestseller: boolean
    detailUrl: string
  }
}>()
</script>



<template>
  <div
    class="modal fade"
    tabindex="-1"
    :id="`productDetailModal-${product.id}`"
    :aria-labelledby="`productDetailLabel-${product.id}`"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            :id="`productDetailLabel-${product.id}`"
          >
            {{ product.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img
            :src="product.image"
            alt="Product Image"
            class="img-fluid mb-3"
          />
           <p>{{ product.description }}</p>
          <p
            class="h5 text-danger mb-3"
            v-if="product.salePrice"
          >
            Sale Price: ${{ product.salePrice.toFixed(2) }}
          </p>
          <p class="text-muted">
            Price:
            <span
              :style="{ textDecoration: product.salePrice ? 'line-through' : 'none' }"
            >
              ${{ product.price.toFixed(2) }}
            </span>
          </p>
          <p>Category: {{ product.category }}</p>
          <p>
            Tags:
            <span
              v-for="tag in product.tags"
              :key="tag"
              class="badge bg-secondary me-1"
            >
              {{ tag }}
            </span>
          </p>
          <p
            v-if="product.isBestseller"
            class="badge bg-success"
          >
            Bestseller
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <a href="https://shopeomedia.com/contact" 
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
           Contact Us
        </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
