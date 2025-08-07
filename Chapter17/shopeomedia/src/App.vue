<script setup>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
 <div class="d-flex flex-column min-vh-100">
   <Header></Header>
<div class="flex-grow-1">
  <router-view></router-view>
</div>
<Footer></Footer>
 </div>
</template>

<style scoped></style>
