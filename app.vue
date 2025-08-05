<template>
	<div class="app">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup>
import '~/assets/styles/base.css'
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
	transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
}

.app {
	display: flex;
	width: 100vw;
}
</style>