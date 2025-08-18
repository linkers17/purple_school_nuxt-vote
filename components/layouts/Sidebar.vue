<template>
	<aside class="sidebar">
		<nav>
			<NuxtLink to="/">
				<Icon name="icons:home" size="24px" />
			</NuxtLink>
			<NuxtLink :to="{ name: 'login' }">
				<Icon name="icons:exit" size="24px" />
			</NuxtLink>
		</nav>
	</aside>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.sidebar {
	padding: 45px 28px;
	height: 100vh;
	border-right: 1px solid var(--color-border);
	width: 80px;
}

.sidebar nav {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
}

.sidebar a {
	color: var(--color-black);
}

.sidebar a:hover {
	color: var(--color-black-hover);
}
</style>