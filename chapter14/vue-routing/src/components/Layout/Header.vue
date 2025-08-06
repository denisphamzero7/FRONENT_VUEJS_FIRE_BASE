<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const currentTheme = ref('light')

const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-white shadow-sm">
            <div class="container">
                <!-- Logo -->
                <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'home' }">
                    <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 32px; height: 32px;">
                        <span class="text-white fw-bold">$</span>
                    </div>
                    <span class="fw-bold">Brand</span>
                </router-link>

                <!-- Navigation Links -->
                <div class="navbar-nav me-auto">
                    <router-link class="nav-link" :to="{ name: 'home' }" active-class="active">Home</router-link>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Product
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" :to="{ name: 'product-list' }">Product List</router-link></li>
                            <li><router-link class="dropdown-item" :to="{ name: 'product-detail', params: { id: 1 } }">Product Detail</router-link></li>
                        </ul>
                    </div>
                </div>

                <!-- Right side buttons -->
                <div class="d-flex align-items-center">
                    <!-- Theme Switcher -->
                    <div class="dropdown me-3">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi" :class="currentTheme === 'light' ? 'bi-sun' : 'bi-moon'"></i>
                            {{ currentTheme === 'light' ? 'Light' : 'Dark' }}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" @click="currentTheme = 'light'">
                                <i class="bi bi-sun me-2"></i>Light
                            </a></li>
                            <li><a class="dropdown-item" href="#" @click="currentTheme = 'dark'">
                                <i class="bi bi-moon-stars me-2"></i>Dark
                            </a></li>
                        </ul>
                    </div>
                    
                    <!-- Auth buttons -->
                    <router-link class="btn btn-outline-primary me-2" to="#">Sign In</router-link>
                    <router-link class="btn btn-primary" to="#">Sign Up</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.navbar {
    border-bottom: 1px solid #e9ecef;
}

.navbar-brand {
    text-decoration: none;
    color: #333;
}

.navbar-brand:hover {
    color: #333;
}

.nav-link {
    color: #6c757d;
    font-weight: 500;
}

.nav-link:hover,
.nav-link.active {
    color: #0d6efd;
}

.dropdown-item {
    display: flex;
    align-items: center;
}

.dropdown-item i {
    font-size: 14px;
}
</style>