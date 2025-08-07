<script setup lang="ts">
import { useGameStore } from '@/store/gamestore'
const gameStore = useGameStore()
</script>

<template>
    <div>
<h1>Infor</h1>
<p class="text-center"> Đây là trang thông tin page</p>
<p>
    đây là 1 game đơn giản , nơi mà bạn có thể tăng hoặc giảm điểm của mình bằng cách click vào các nút tương ứng.{{ gameStore.getWinningScore }}
</p>
<input type="text" v-model="gameStore.maxHealth" class="form-control w-25 mx-auto" placeholder="Nhập điểm thắng cuộc" />
    </div>
</template>

<style lang="scss" scoped>

</style>