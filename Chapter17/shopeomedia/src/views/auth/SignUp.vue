<!-- SignUp.vue -->
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSwal } from '@/utility/useSwal';

import { APP_ROUTE_NAMES } from '@/constants/routeName';
import { useAuthStore } from '@/stores/authSore';

const { showSuccess, showError } = useSwal();
const router = useRouter();
const authStore = useAuthStore();

const loading = ref(false);
const errors = ref<string[]>([]);

const form = reactive({
  email: '',
  password: '',
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(): boolean {
  errors.value = [];
  if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
    errors.value.push('Vui lòng nhập email hợp lệ.');
  }
  if (!form.password || form.password.length < 6) {
    errors.value.push('Mật khẩu phải có ít nhất 6 ký tự.');
  }
  return errors.value.length === 0;
}

const handleSignUp = async () => {
  if (!validate()) return;

  loading.value = true;
  try {
    await authStore.signUpUser(form.email.trim(), form.password);
    showSuccess('Đăng ký thành công!');
    router.push({ name: APP_ROUTE_NAMES.HOME });
  } catch (err: any) {
    // Map error.code của Firebase sang thông báo Việt
    switch (err.code) {
      case 'auth/invalid-email':
        errors.value.push('Email không hợp lệ.');
        break;
      case 'auth/email-already-in-use':
        errors.value.push('Email này đã được sử dụng.');
        break;
      case 'auth/weak-password':
        errors.value.push('Mật khẩu quá yếu (ít nhất 6 ký tự).');
        break;
      default:
        errors.value.push('Đã xảy ra lỗi: ' + err.message);
    }
    showError(errors.value.join('\n'));
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <h3 class="card-title mb-3 text-success text-center">Đăng ký tài khoản</h3>
            <p class="text-muted small text-center mb-3">Đăng ký tài khoản người dùng</p>

            <div v-if="errors.length" class="alert alert-danger">
              <ul class="mb-0">
                <li v-for="(e, i) in errors" :key="i">{{ e }}</li>
              </ul>
            </div>

            <form @submit.prevent="handleSignUp" novalidate>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  id="email"
                  v-model.trim="form.email"
                  type="email"
                  class="form-control"
                  placeholder="you@gmail.com"
                  autocomplete="email"
                  :disabled="authStore.isloading"
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Mật khẩu</label>
                <input
                  id="password"
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  placeholder="Nhập mật khẩu"
                  autocomplete="current-password"
                  :disabled="authStore.isloading"
                />
              </div>

              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success" :disabled="authStore.isloading">
                  <span v-if="authStore.isloading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  {{ authStore.isloading ? 'Đang đăng ký...' : 'Đăng Ký' }}
                </button>
              </div>
            </form>

            <hr class="my-3" />

            <div class="text-center small text-muted">
              Bạn đã có tài khoản?
              <router-link :to="{ name: APP_ROUTE_NAMES.SIGN_IN }" class="text-success">
                Đăng nhập ngay
              </router-link>
            </div>

            <div class="d-flex gap-2 justify-content-center mt-3">
              <button class="btn btn-outline-primary btn-sm" type="button" :disabled="authStore.isloading">Google</button>
              <button class="btn btn-outline-dark btn-sm" type="button" :disabled="authStore.isloading">Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
}
</style>
