<script setup lang="ts">
import { APP_ROUTE_NAMES } from '@/constants/routeName';
import { useThemeStore } from '@/stores/themestore';
import { RouterLink } from 'vue-router';
const themeStore = useThemeStore();
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
      <a class="" href="#">
        <img
          src="../../assets/LOGO.png"
          alt="Logo"
          width="50"
          height="50"
          class="d-inline-block align-text-top img-fluid"
        >
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{name:APP_ROUTE_NAMES.HOME}"  class="nav-link active" aria-current="page" href="#">Home</router-link>
        </li>
         <li class="nav-item">
          <router-link :to="{name:APP_ROUTE_NAMES.PRODUCT_LIST}"  class="nav-link active" aria-current="page" href="#">Product</router-link>
        </li>
          <li class="nav-item">
          <router-link :to="{name:APP_ROUTE_NAMES.PRODUCT_CREATE}"  class="nav-link active" aria-current="page" href="#">Add product</router-link>
        </li>
      </ul>
     <ul class="d-flex navbar-nav">
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-laptop"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><button @click="themeStore.setTheme('light')" class="dropdown-item" href="#"><i class="bi bi-sun"></i>&nbsp;  Light</button></li>
            <li><button @click="themeStore.setTheme('dark')" class="dropdown-item" href="#"><i class="bi bi-moon-stars-fill"></i> &nbsp;  Dark</button></li>

          </ul>
        </li>
        <li class="nav-item">
          <router-link :to="{name:APP_ROUTE_NAMES.SIGN_IN}" class="nav-link active" aria-current="page" href="#">Sign In</router-link>

        </li>
        <li>
            <router-link :to="{name:APP_ROUTE_NAMES.SIGN_UP}" class="nav-link active" aria-current="page" href="#">Sign Up</router-link>
        </li>
     </ul>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>

</style>