<template>
	<PostForm
		@save="savePost"
	/>
</template>

<script lang="ts" setup>
import PostForm from '~/components/PostForm.vue';
import type { PostSaveRequest } from '~/types/post.types';

definePageMeta({
	middleware: 'auth',
})

useSeoMeta({
	title: 'Создание поста',
})

const config = useRuntimeConfig()
const API_URL = config.public.apiurl
const authStore = useAuthStore()
const { user }  =storeToRefs(authStore)

const savePost = async (body: PostSaveRequest) => {
	try {
		await $fetch(`${API_URL}/posts/create`, {
			body,
			headers: {
				'Authorization': `Bearer ${user.value?.token}`,
			},
			method: 'post',
		})
		navigateTo('/')
	} catch (error) {
		console.error(error)
	}
}
</script>

<style lang="scss" scoped></style>