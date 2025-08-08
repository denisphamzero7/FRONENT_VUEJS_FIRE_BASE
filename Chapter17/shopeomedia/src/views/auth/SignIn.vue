<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useSwal } from '@/utility/useSwal';
import { APP_ROUTE_NAMES } from '@/constants/routeName';

const { showSuccess, showError } = useSwal();
const router = useRouter();

const loading = ref(false);
const errors = ref<string[]>([]);

// reactive form object (remember to import reactive)
const form = reactive({
  email: '',
  password: '',
});

const rememberMe = ref(false);

// basic email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (): boolean => {
  errors.value = [];

  if (!form.email || !emailRegex.test(form.email.trim())) {
    errors.value.push('Vui lòng nhập địa chỉ email hợp lệ.');
  }
  if (!form.password || form.password.length < 6) {
    errors.value.push('Mật khẩu phải có ít nhất 6 ký tự.');
  }

  return errors.value.length === 0;
};

const handleLogin = async () => {
  // clear previous errors
  errors.value = [];

  if (!validate()) return;

  loading.value = true;
  try {

    console.log('Logging in with', { ...form, rememberMe: rememberMe.value });

    showSuccess('Đăng nhập thành công!');
  
    router.push({ name:  APP_ROUTE_NAMES.HOME });
  } catch (err: any) {
    console.error('Login error:', err);
    const msg = err?.response?.data?.message ?? err?.message ?? 'Đăng nhập thất bại. Vui lòng thử lại.';
    showError(msg);
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
            <h3 class="card-title mb-3 text-success text-center">Đăng nhập</h3>
            <p class="text-muted small text-center mb-3">Đăng nhập để quản lý sản phẩm và truy cập dashboard</p>

            <!-- validation errors -->
            <div v-if="errors.length" class="alert alert-danger">
              <ul class="mb-0">
                <li v-for="(e, i) in errors" :key="i">{{ e }}</li>
              </ul>
            </div>

            <form @submit.prevent="handleLogin" novalidate>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  id="email"
                  v-model.trim="form.email"
                  type="email"
                  class="form-control"
                  placeholder="you@gmail.com"
                  autocomplete="email"
                  :disabled="loading"
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
                  :disabled="loading"
                />
              </div>

              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="form-check">
                  <input id="remember" class="form-check-input" type="checkbox" v-model="rememberMe" :disabled="loading" />
                  <label class="form-check-label" for="remember">Ghi nhớ đăng nhập</label>
                </div>
                <a class="small" href="/forgot-password">Quên mật khẩu?</a>
              </div>

              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  {{ loading ? 'Đang đăng nhập...' : 'Đăng nhập' }}
                </button>

                <!-- router-link used as a button -->
                <router-link
                  class="btn btn-outline-secondary"
                  :to="{ name: APP_ROUTE_NAMES.SIGN_UP }"
                >
                  Tạo tài khoản mới
                </router-link>
              </div>
            </form>

            <hr class="my-3" />

            <div class="text-center small text-muted">
              Hoặc đăng nhập bằng
            </div>
            <div class="d-flex gap-2 justify-content-center mt-3">
              <!-- placeholders — wire to actual social auth if available -->
              <button class="btn btn-outline-primary btn-sm" type="button" :disabled="loading">Google</button>
              <button class="btn btn-outline-dark btn-sm" type="button" :disabled="loading">Github</button>
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
