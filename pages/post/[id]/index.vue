<template>
	<div class="post">
		<PostCard
			v-if="post"
			:post
		/>
	</div>
</template>

<script lang="ts" setup>
import type { Post } from '~/types/post.types';

const config = useRuntimeConfig()
const API_URL = config.public.apiurl

const { id } = useRoute().params

const { data: post } = await useFetch<Post>(`${API_URL}/posts/${id}`)

useSeoMeta({
	description: post.value?.content,
	title: `Пост ${post.value?.title}`,
})
</script>

<style lang="scss" scoped></style>