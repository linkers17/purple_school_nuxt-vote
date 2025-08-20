<template>
	<div class="login">
		<h1 class="login-title">Вход на платформу</h1>
		<form class="login-form">
			<div class="login-form__fields">
				<InputField
					v-model="formData.email"
					icon="inbox"
					placeholder="Email"
				/>
				<InputField
					v-model="formData.password"
					icon="key"
					placeholder="Пароль"
					type="password"
				/>
			</div>
			<ActionButton @click.prevent.stop="login">Войти в аккаунт</ActionButton>
		</form>
	</div>
</template>

<script lang="ts" setup>
import type { LoginRequest, LoginResponse } from '~/types/auth.types';

const API_URL = useAPI()
const authStore = useAuthStore()

const formData = ref<LoginRequest>({
	email: '',
	password: '',
})

const login = async () => {
	const data = await $fetch<LoginResponse>(`${API_URL}/auth/login`, {
		method: 'POST',
		body: formData.value,
	})
	authStore.setUser(data)
	navigateTo({ name: 'post' })
}

useSeoMeta({
	title: 'Вход',
})
</script>

<style scoped>
.login, .login-form {
	display: flex;
	flex-direction: column;
	gap: 28px;
	justify-content: flex-start;
}

.login-title {
	font-weight: 500;
	font-size: 16px;
}

.login-form__fields {
	display: flex;
	flex-direction: column;
	gap: 18px;
}
</style>