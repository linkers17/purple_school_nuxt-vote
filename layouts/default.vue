<template>
	<Sidebar />
	<main class="main">
		<slot />
	</main>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.main	{
	padding: 40px 0 40px 135px;
	flex-grow: 1;
	max-width: 668px;
}
</style>