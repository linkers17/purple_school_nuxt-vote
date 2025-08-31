<template>
	<PostForm
		v-if="post"
		:post
		@save="savePost"
	/>
</template>

<script lang="ts" setup>
import PostForm from '~/components/PostForm.vue';
import type { Post, PostSaveRequest } from '~/types/post.types';

definePageMeta({
	middleware: 'auth',
})

useSeoMeta({
	title: 'Редактиронивае поста',
})

const config = useRuntimeConfig()
const API_URL = config.public.apiurl

const { id } = useRoute().params

const authStore = useAuthStore()
const { user }  =storeToRefs(authStore)

const { data: post } = await useFetch<Post>(`${API_URL}/posts/${id}`)

const savePost = async (body: PostSaveRequest) => {
	try {
		await $fetch(`${API_URL}/posts/${id}`, {
			body,
			headers: {
				'Authorization': `Bearer ${user.value?.token}`,
			},
			method: 'put',
		})
		navigateTo('/')
	} catch (error) {
		console.error(error)
	}
}
</script>

<style lang="scss" scoped></style>