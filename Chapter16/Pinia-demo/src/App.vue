<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="text-center pt-3 text-success h3">CountOpedia</div>
      <hr />
      <div class="d-flex justify-content-center gap-3 mb-4">
        <router-link
          to="/"
          class="btn btn-warning rounded-pill px-4 py-2"
        >
          Home
        </router-link>

        <router-link
          to="/infor"
          class="btn btn-warning rounded-pill px-4 py-2"
        >
          Info
        </router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>


<style scoped>



</style>
