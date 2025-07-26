<template>
	<Sidebar />
	<main>
		<slot />
	</main>
</template>

<script lang="ts" setup>

import Sidebar from '~/components/layouts/Sidebar.vue';
</script>

<style scoped></style>