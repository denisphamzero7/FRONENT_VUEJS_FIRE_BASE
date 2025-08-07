<script setup lang="ts">
import { useGameStore } from '@/store/gamestore'
const gameStore = useGameStore()
const Descrement=()=>{
gameStore.setNextDefense()
}
const Increment=()=>{
   gameStore.setNextAttack() 
}
const Ramdom = ()=>{
    Math.random() > 0.5 ? Increment() : Descrement()
}
</script>

<template>
    <div class="text-center">
    <p class="text-light">Let's play the game</p>
    <h2 class="text-primary pb-3">Curent score:{{ gameStore.getScore }}</h2>
    <span class="text-warning pb-3">Max score: {{ gameStore.maxHealth }}</span>
   <span v-if="gameStore.getScore>=gameStore.getWinningScore ">You won</span>
    <div class="row" v-if="gameStore.getScore<gameStore.getWinningScore">
        <div class="col-5 offset-1">
            <button @click="Increment()" class="form-control btn btn-success p-4">Increment</button>
        </div>
         <div class="col-5 ">
            <button @click="Descrement()" class="form-control btn  btn-danger p-4">Descrement</button>
        </div>
           <div class="col-5 offset-3 pt-3">
            <button @click="Ramdom()" class="form-control btn btn-warning p-4">Ramdom</button>
        </div>
    </div>
    <div v-else>
        <button @click="gameStore.resetGame()">Reset game</button>
    </div>
    </div>
</template>

<style lang="scss" scoped>

</style>