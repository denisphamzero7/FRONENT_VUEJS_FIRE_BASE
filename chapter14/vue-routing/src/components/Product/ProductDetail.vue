<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id
</script>

<template>
    <div>
        <h1>Product Detail</h1>
        <p>Product ID: {{ productId }}</p>
    </div>
</template>

<style scoped>

</style>