<script setup lang="ts">
import { ref ,reactive} from 'vue';
import { useRouter,useRoute } from 'vue-router';
const route = useRouter();
const loading = ref(false);

const productObj = reactive({
    name: '',
    description: '',
    price: 0,
    salePrice: 0,
    tags: '',
    isSale: false,
    isBestseller: false,
    image: 'https://placehold.co/600x400',
    category: '',
});
</script>

<template>
    <div class="row border p4 my-5 rounded justify-content-center">
        <div class="col-9">
            <form action="">
                <div class="h2 text-center text-success">Create Product</div>
                <hr/>
                <div class="alert alert-danger pb-0">
                    Làm ơn sửa lỗi sau:
                    <ul>
                        <li>Danh sách error</li>

                    </ul>
                </div>
                <div class="mt-3">
                    <div class="text-muted">Name</div>
                    <input v-model="productObj.name" type="text" class="form-control">
                </div>
                 <div class="mt-3">
                    <div class="text-muted">Description</div>
                    <textarea v-model="productObj.description" type="text" class="form-control"></textarea>
                </div>
                 <div class="mt-3">
                    <div class="text-muted">Price</div>
                    <input type="number" v-model="productObj.price" class="form-control">
                </div>
                 <div class="mt-3">
                    <div class="text-muted">Name</div>
                    <input type="text" v-model="productObj.name" class="form-control">
                </div>
                 <div class="mt-3">
                    <div class="text-muted">Sale Price</div>
                    <input type="number" v-model="productObj.salePrice" class="form-control">
                </div>
              
                 <div class="mt-3">
                    <div class="text-muted">Tags (comma-seperated)</div>
                    <input type="text"  v-model="productObj.tags" placeholder="e.g..., moderm, luxury" class="form-control">
                </div>
               
                 <div class="form-check form-switch pt-3">
                    <input type="number" v-model="productObj.isBestseller" class="form-check-input" role="switch">
                    <label class="form-check-label">Bestseller</label>
                    
                </div>
                <div class="mt-3">
                   <label for="" class="text-muted">Category</label>
                    <select v-model="productObj.category" class="form-select">
                        <option value="">Select Category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                    </select>
                    
                </div>
                  <div class="mt-3">
                    <div class="text-muted">Image</div>
                    <div class="input-group">
                        <input v-model="productObj.image" type="file" class="form-control"></input>
                    </div>
                </div>
                 
                  <div class="mt-3">
          <!-- Submit & Cancel -->
          <button
            type="submit"
            class="btn btn-success m-2 w-25"
            :disabled="loading"
          >
            <!-- Spinner chỉ show khi loading -->
            <span
              v-if="loading"
              class="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            {{ loading ? 'Submitting...' : 'Submit' }}
          </button>
          <a href="/" class="btn btn-secondary m-2 w-25">Cancel</a>
        </div>
            </form>
        </div>
        <div class="col-2">
            <img :src="`https://placehold.co/600x400`" class="img-fluid w100 m-3 p-3 rounded" alt="Product Priview">
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>