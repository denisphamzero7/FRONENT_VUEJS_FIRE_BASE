import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('themestore', () => {
  const theme = ref('dark');

  const setTheme = (newTheme) => {
    theme.value = newTheme; 
    document.body.setAttribute('data-bs-theme', newTheme);
  };

  return {
    theme,
    setTheme,
  };
},{
    persist:true
});
