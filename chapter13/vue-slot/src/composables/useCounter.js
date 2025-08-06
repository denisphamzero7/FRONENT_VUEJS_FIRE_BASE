import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const doubleCount = computed(() => count.value * 2)
  
  const increment = () => {
    count.value++
  }
  
  const decrement = () => {
    count.value--
  }
  
  const reset = () => {
    count.value = initialValue
  }
  
  const setValue = (value) => {
    count.value = value
  }
  
  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset,
    setValue
  }
} 