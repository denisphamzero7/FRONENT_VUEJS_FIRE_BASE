import { defineStore } from "pinia";
import { ref ,computed} from "vue";
// compossion api
export const useGameStore = defineStore('gameStore', () => {
  // STATE
  const score = ref(50)
  const maxHealth = ref(100)
  const maxAttack = ref(30)
  const maxDefense = ref(10)

  // GETTERS (dùng computed)
  const getScore = computed(() => score.value)
  const getWinningScore = computed(() => maxHealth.value)

  // ACTIONS
  const setNextAttack = () => {
    const attack = Math.floor(Math.random() * maxAttack.value) + 1
    console.log('Attack:', attack)
    score.value += attack
  }

  const setNextDefense = () => {
    const defense = Math.floor(Math.random() * maxDefense.value) + 1
    console.log('Defense:', defense)
    score.value -= defense
  }

  const resetGame = () => {
    score.value = 50
  }

  return {
    // State
    score,
    maxHealth,
    maxAttack,
    maxDefense,

    // Getters
    getScore,
    getWinningScore,

    // Actions
    setNextAttack,
    setNextDefense,
    resetGame,
  }
})

// đây optionapi
// export const useGameStore = defineStore("gameStore",{
// state:()=>({
//     score:50,
//     maxHealth:100,
//     maxAttack:30,
//     maxDefense:10
// }),
// getters:{
//     getScore:(state)=>state.score
//    ,
//    getwwinningScore :(state)=> state.maxHealth
  
//     // getNextAttack(){
//     //     let attack = Math.floor(Math.random() * this.maxAttack) + 1;
//     //     console.log("acttack: ", attack)
//     //     return attack
//     // },
//     // getNextDefense(){
//     //     let defense = Math.floor(Math.random() * this.maxDefense) + 1;
//     //     console.log('defense',defense)
//     //     return defense
//     // }
// },

// actions:{
//     setNextActtack(){
//         let attack = Math.floor(Math.random() * this.maxAttack) + 1;
//         console.log("acttack: ", attack)
//         return this.score += attack
//     },
//     setNextDefense(){
//         let defense = Math.floor(Math.random() * this.maxDefense) + 1;
//         console.log('defense',defense)
//         return this.score -= defense
//     },
//     setRamdom(){
//         let random = Math.floor(Math)
//     },
//       resetgame(){
//         this.score = 50
//       }
// }})