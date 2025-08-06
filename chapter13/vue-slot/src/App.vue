<template>
  <div id="app" class="container-fluid">
    <header class="bg-primary text-white text-center py-4 mb-4 rounded">
      <h1 class="display-4 mb-0">Demo Các Khái Niệm Nâng Cao Vue.js</h1>
    </header>

    <main class="row">
      <!-- Dynamic Components Demo -->
      <section class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="h4 mb-0">1. Component Động</h2>
          </div>
          <div class="card-body">
            <div class="btn-group mb-3" role="group">
              <button @click="currentComponent = 'ComponentA'" class="btn btn-outline-primary">Hiển thị Component A</button>
              <button @click="currentComponent = 'ComponentB'" class="btn btn-outline-primary">Hiển thị Component B</button>
              <button @click="currentComponent = 'ComponentC'" class="btn btn-outline-primary">Hiển thị Component C</button>
            </div>
            
            <div class="border border-2 border-dashed p-4 bg-light rounded">
              <ComponentA v-if="currentComponent === 'ComponentA'" />
              <ComponentB v-if="currentComponent === 'ComponentB'" />
              <ComponentC v-if="currentComponent === 'ComponentC'" />
            </div>
          </div>
        </div>
      </section>

      <!-- Keep Alive Demo -->
      <section class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="h4 mb-0">2. Keep Alive</h2>
          </div>
          <div class="card-body">
            <div class="btn-group mb-3" role="group">
              <button @click="keepAliveComponent = 'KeepAliveA'" class="btn btn-outline-success">Hiển thị Keep Alive A</button>
              <button @click="keepAliveComponent = 'KeepAliveB'" class="btn btn-outline-success">Hiển thị Keep Alive B</button>
            </div>
            
            <div class="border border-2 border-dashed p-4 bg-light rounded">
              <keep-alive>
                <component :is="keepAliveComponent" />
              </keep-alive>
            </div>
          </div>
        </div>
      </section>

      <!-- Slots Demo -->
      <section class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="h4 mb-0">3. Slots & Named Slots</h2>
          </div>
          <div class="card-body">
            <SlotDemo>
              <template #header>
                <h3 class="text-primary">Đây là header slot có tên</h3>
              </template>
              <template #default>
                <p class="text-muted">Đây là nội dung slot mặc định</p>
              </template>
              <template #footer>
                <p class="text-secondary">Đây là footer slot có tên</p>
              </template>
            </SlotDemo>
          </div>
        </div>
      </section>

      <!-- Scoped Slots Demo -->
      <section class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="h4 mb-0">4. Scoped Slots (Ai Sở Hữu Dữ Liệu)</h2>
          </div>
          <div class="card-body">
            <ScopedSlotDemo>
              <template #item="{ item, index }">
                <div class="d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded">
                  <span class="fw-bold">{{ index + 1 }}. {{ item.name }}</span>
                  <span class="badge bg-primary">{{ item.price }}đ</span>
                </div>
              </template>
            </ScopedSlotDemo>
          </div>
        </div>
      </section>

      <!-- Scoped Styles Demo -->
      <section class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="h4 mb-0">5. Scoped Styles</h2>
          </div>
          <div class="card-body">
            <ScopedStylesDemo />
          </div>
        </div>
      </section>

      <!-- Lifecycle Demo -->
      <section class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="h4 mb-0">6. Demo Vòng Đời Component</h2>
          </div>
          <div class="card-body">
            <button @click="showLifecycle = !showLifecycle" class="btn btn-warning mb-3">
              {{ showLifecycle ? 'Ẩn' : 'Hiển thị' }} Component Vòng Đời
            </button>
            <LifecycleDemo v-if="showLifecycle" />
          </div>
        </div>
      </section>

      <!-- Composables Demo -->
      <section class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="h4 mb-0">7. Hành Động Composables</h2>
          </div>
          <div class="card-body">
            <ComposablesDemo />
          </div>
        </div>
      </section>

      <!-- Multiple Composables Demo -->
      <section class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="h4 mb-0">8. Composables Trong Nhiều Component</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <ComposableComponentA />
              </div>
              <div class="col-md-6">
                <ComposableComponentB />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Props in Composables Demo -->
      <section class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="h4 mb-0">9. Props Trong Composables</h2>
          </div>
          <div class="card-body">
            <PropsComposableDemo :initial-count="10" />
          </div>
        </div>
      </section>

      <!-- Real-world Slot Demo -->
      <section class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="h4 mb-0">10. Slot với Ví Dụ Thực Tế - Số May Mắn</h2>
          </div>
          <div class="card-body">
            <LuckyNumberParentComponent />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
import ComponentC from './components/ComponentC.vue'
import KeepAliveA from './components/KeepAliveA.vue'
import KeepAliveB from './components/KeepAliveB.vue'
import SlotDemo from './components/SlotDemo.vue'
import ScopedSlotDemo from './components/ScopedSlotDemo.vue'
import ScopedStylesDemo from './components/ScopedStylesDemo.vue'
import LifecycleDemo from './components/LifecycleDemo.vue'
import ComposablesDemo from './components/ComposablesDemo.vue'
import ComposableComponentA from './components/ComposableComponentA.vue'
import ComposableComponentB from './components/ComposableComponentB.vue'
import PropsComposableDemo from './components/PropsComposableDemo.vue'
import LuckyNumberParentComponent from './components/LuckyNumberParentComponent.vue'

export default {
  name: 'App',
  components: {
    ComponentA,
    ComponentB,
    ComponentC,
    KeepAliveA,
    KeepAliveB,
    SlotDemo,
    ScopedSlotDemo,
    ScopedStylesDemo,
    LifecycleDemo,
    ComposablesDemo,
    ComposableComponentA,
    ComposableComponentB,
    PropsComposableDemo,
    LuckyNumberParentComponent
  },
  data() {
    return {
      currentComponent: 'ComponentA',
      keepAliveComponent: 'KeepAliveA',
      showLifecycle: false
    }
  },
  mounted() {
    console.log('App mounted')
    console.log('Current component:', this.currentComponent)
    console.log('Keep alive component:', this.keepAliveComponent)
  }
}
</script>

<style scoped>
/* Custom styles for Bootstrap overrides */
.border-dashed {
  border-style: dashed !important;
}

/* Ensure proper spacing for the app container */
#app {
  padding: 20px;
}

/* Custom styling for component display areas */
.bg-light {
  min-height: 100px;
}
</style>
