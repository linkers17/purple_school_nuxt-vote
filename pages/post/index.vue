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
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { PostsResponse } from '~/types/post.types'

const config = useRuntimeConfig()
const API_URL = config.public.apiurl

const { data: posts } = await useFetch<PostsResponse>(`${API_URL}/posts`)
</script>

<style scoped>
.posts__list {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 38px;
}
</style>