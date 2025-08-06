import { ref, computed } from 'vue'

export function useToggle(initialValue = false) {
  const isOn = ref(initialValue)
  
  const toggle = () => {
    isOn.value = !isOn.value
  }
  
  const turnOn = () => {
    isOn.value = true
  }
  
  const turnOff = () => {
    isOn.value = false
  }
  
  const status = computed(() => isOn.value ? 'Bật' : 'Tắt')
  
  return {
    isOn,
    toggle,
    turnOn,
    turnOff,
    status
  }
} 