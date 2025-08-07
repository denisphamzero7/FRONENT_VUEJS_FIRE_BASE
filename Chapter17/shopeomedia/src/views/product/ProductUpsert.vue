<script setup lang="ts">
import { ref ,reactive,onMounted} from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { PRODUCT_CATEGORIES } from '@/constants/appConstants';
import { useSwal } from '@/utility/useSwal';
import productService from '@/services/productService';
import { APP_ROUTE_NAMES } from '@/constants/routeName';
const {showSuccess,showError,showConfirm} = useSwal();
const route = useRouter();
const loading = ref(false);
const errorlist = reactive([]);
const productObj = reactive({
    name: '',
    description: '',
    price: 0,
    salePrice: 0,
    tags: [],
    isSale: false,
    isBestseller: false,
    image: 'https://placehold.co/600x400',
    category: '',
});
onMounted(()=>{
// showSuccess('Welcome to Product Creation Page!');
})
const handleSubmit = async()=>{
    loading.value = true;
   try {
        // Validate productObj
        errorlist.length = 0; // Clear previous errors
        if (productObj.name.length < 3) {
            errorlist.push('Tên nên nhiều hơn 3 ký tự');
        }
        if (productObj.price < 0) {
            errorlist.push('Giá phải lớn hơn 0');
        }
        if (productObj.salePrice && productObj.salePrice < 0) {
            errorlist.push('Sale Price cannot be negative');
        }
        if (!productObj.category) {
            errorlist.push('Hãy chọn một danh mục');
        }
        
        if (!errorlist.length) {
          const productData = {
        ...productObj,
        price: Number(productObj.price),
        salePrice:productObj.salePrice ? Number(productObj.salePrice) : null,
        tags: productObj.tags.length>0? productObj.tags.split(',').map((tag)=> tag.trim()):[],   //kiểm tra tag > 0 thì tách ,ngược lại để rổng
        bestseller: productObj.isBestseller,
        category: productObj.category, 
      };
      console.log('Product submitted:', productData);
      await productService.createProduct(productData);
      showSuccess('tạo sản phẩm thành công!');

      route.push({name:APP_ROUTE_NAMES.PRODUCT_LIST})
        }
    
   } catch (error) {
     console.error('Error submitting product:', error);
   } finally {
     loading.value = false;
    
   }
}
</script>

<template>
    <div class="row border p4 my-5 rounded justify-content-center">
        <div class="col-9">
            <form action="" @submit.prevent="handleSubmit">
                <div class="h2 text-center text-success">Create Product</div>
                <hr/>
                <div v-if="errorlist.length>0" class="alert alert-danger pb-0">
                    Làm ơn sửa lỗi sau:
                    <ul>
                        <li v-for="error in errorlist" :key="error">{{ error }}</li>

                    </ul>
                </div>
                <div class="mt-3">
                    <div class="text-muted">Name</div>
                    <input v-model.trim="productObj.name" type="text" class="form-control">
                </div>
                 <div class="mt-3">
                    <div class="text-muted">Description</div>
                    <textarea v-model="productObj.description" type="text" class="form-control"></textarea>
                </div>
                 <div class="mt-3">
                    <div class="text-muted">Price</div>
                    <input type="number" v-model.number="productObj.price" class="form-control">
                </div>
                 <div class="mt-3">
                    <div class="text-muted">Sale Price</div>
                    <input type="number" v-model.number="productObj.salePrice" class="form-control">
                </div>
              
                 <div class="mt-3">
                    <div class="text-muted">Tags (comma-seperated)</div>
                    <input type="text"  v-model="productObj.tags" placeholder="e.g..., moderm, luxury" class="form-control">
                </div>
               
                 <div class="form-check form-switch pt-3">
                    <input type="checkbox" v-model="productObj.isBestseller" class="form-check-input" role="switch">
                    <label class="form-check-label" for="bestseller">Bestseller</label>
                    
                </div>
                <div class="mt-3">
                   <label for="" class="text-muted">Category</label>
                    <select v-model="productObj.category" class="form-select">
                       <option value="" disabled selected>Choose a category</option>
                        <option v-for="category in PRODUCT_CATEGORIES" :key="category" :value="category">
                            {{ category }}
                        </option>
                    </select>
                    
                </div>
                  <div class="mt-3">
                    <div class="text-muted">Image</div>
                    <div class="input-group">
                        <input type="file" class="form-control"></input>
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