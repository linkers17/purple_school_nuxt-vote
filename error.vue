<template>
	<div class="error-page">
		<div class="error-page__info">
			<h1>{{ error.statusCode }}</h1>
			<p>{{ error.statusMessage }}</p>
		</div>
		<ActionButton @click="goHome">
			На главную
		</ActionButton>
	</div>
</template>

<script lang="ts" setup>
import type { NuxtError } from '#app'
import ActionButton from '~/components/ActionButton.vue';

interface Props {
	error: NuxtError,
}

const {
	error,
} = defineProps<Props>()

const goHome = () => {
	navigateTo('/')
}
</script>

<style scoped>
.error-page {
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
}

.error-page__info {
	text-align: center;
}

.error-page__info p {
	font-weight: 300;
	line-height: 24px;
	font-size: 16px;
}
</style>