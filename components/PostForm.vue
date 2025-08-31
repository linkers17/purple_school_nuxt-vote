<template>
	<form class="post-form">
		<div class="post-form__title">
			<Icon name="material-symbols:add" size="24px" />
			<input
				v-model="form.title"
				type="text"
				class="post-form__input"
				placeholder="Тема"
				name="title"
			>
		</div>
		<textarea
			v-model="form.content"
			name="content"
			cols="30"
			rows="10"
			class="post-form__textarea"
			placeholder="Текст..."
		></textarea>
		<ActionButton @click.prevent="savePost">Сохранить</ActionButton>
	</form>
</template>

<script lang="ts" setup>
import type { Post, PostSaveRequest } from '~/types/post.types';

const emit = defineEmits<{
	(event: 'save', post: PostSaveRequest): void
}>()

const { post } = defineProps<{
	post?: Post,
}>()

const form = ref<PostSaveRequest>({
	content: post ? post.content : '',
	title: post ? post.title : '',
})

const savePost = () => {
	emit('save', form.value)
}
</script>

<style scoped>
.post-form__title {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 28px;
}

.post-form__input,
.post-form__textarea {
	font-size: 16px;
	color: var(--color-black);
	border: none;
}
</style>