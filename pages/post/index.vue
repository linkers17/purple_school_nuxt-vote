<template>
	<PostCard :post />
</template>

<script lang="ts" setup>
import type { Post } from '~/types/post.types';

const post = ref<Post>({
	likes: 10,
	dislikes: 1,
	id: 1,
})
</script>

<style lang="scss" scoped></style>