import type { LoginResponse } from '~/types/auth.types';

export default defineNuxtRouteMiddleware(() => {
  const auth = useCookie<LoginResponse>('authStore')

  if (!auth.value || !auth.value?.token) {
    return navigateTo({ name: 'login' })
  }
})