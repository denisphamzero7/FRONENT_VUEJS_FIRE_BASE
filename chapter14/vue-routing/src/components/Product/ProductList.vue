<script setup lang="ts">
import { ref } from 'vue'

const products = ref([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
])
</script>

<template>
    <div>
        <h1>Product List</h1>
        <div class="row">
            <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">Price: ${{ product.price }}</p>
                        <router-link :to="{ name: 'product-detail', params: { id: product.id } }" class="btn btn-primary">
                            View Details
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>