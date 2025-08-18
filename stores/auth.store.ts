import { defineStore } from 'pinia';
import type { LoginResponse } from '~/types/auth.types';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref<LoginResponse | null>(null)

  const setUser = (res: LoginResponse) => {
    user.value = res
  }

  const clearUser = () => {
    user.value = null
  }

  return {
    clearUser,
    setUser,
    user,
  }
}, {
  persist: true,
})