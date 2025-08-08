<script setup lang="ts">
import { ref } from 'vue';
import ProductDetail from './ProductDetail.vue';
const props = defineProps<{
  product: {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    salePrice: number;
    category: string;
    tags: string[];
    isBestseller: boolean;
    detailUrl: string;
  }
}>();

</script>

<template>
  <div class="card h-100 shadow-sm border-0">
    
    <div class="position-relative">
      <img
        :src="product.image"
        alt="Product Image"
        class="card-img-top"
        style="height: 200px; object-fit: cover;"
      />
      <span
        v-if="product.isBestseller"
        class="badge bg-success position-absolute top-0 start-0 m-2"
      >
        Bestseller
      </span>
    </div>

    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text text-muted small mb-3">
        {{ product.description }}
      </p>

      
      <div class="mt-auto">
        <p class="mb-1">
          <small class="text-muted " :style="{textDecoration: product.salePrice ? 'line-through' : 'none'}">
            ${{ product.price.toFixed(2) }}
          </small>
        </p>
        <p class="h5 text-danger mb-3" v-if="product.salePrice">
         SUPPER SALE !!!
        </p>
        <a
          :href="product.detailUrl"
          class="btn btn-success w-100"
          data-bs-toggle="modal" :data-bs-target="`#productDetailModal-${product.id}`"
        >
          View Details
        </a>
      </div>

   
      <div class="mt-3">
        <span class="badge bg-info text-dark">
          {{ product.category }}
        </span>
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="badge bg-secondary ms-1"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
  <ProductDetail :product="product"/>
</template>



<style lang="scss" scoped>

</style>