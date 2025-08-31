<template>
	<div class="posts">
		<div
			v-if="posts"
			class="posts__list"
		>
			<PostCard
				v-for="post in posts.posts"
				:key="post.id"
				:post
				@deletePost="fetchPosts"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { PostsResponse } from '~/types/post.types'

const config = useRuntimeConfig()
const API_URL = config.public.apiurl

const { data: posts } = await useFetch<PostsResponse>(`${API_URL}/posts`)

const fetchPosts = async () => {
	try {
		posts.value = await $fetch<PostsResponse>(`${API_URL}/posts`)
	} catch (error) {
		console.log(error)
	}
}

useSeoMeta({
	description: 'Список постов приложения VoteApp',
	title: 'Список постов',
})
</script>

<style scoped>
.posts__list {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 38px;
}
</style>