<template>
	<div>Create post</div>
</template>

<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
})

useSeoMeta({
	title: 'Создание поста',
})
</script>

<style lang="scss" scoped></style>