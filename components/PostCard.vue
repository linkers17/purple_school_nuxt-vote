<template>
	<div class="post-card">
		<div class="post-card__header">
			<img src="/purple.png" alt="post logo" class="post-card__logo">
			<span class="post-card__name">PurpleSchool</span>
			<span class="post-card__time">4 дня назад</span>
		</div>
		<h2 class="post-card__title">Добавить функцию голосования</h2>
		<p class="post-card__text">Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а какая нет. После добавления поста появляется...</p>
		<div class="post-card__actions">
			<div class="post-card__actions-left">
				<button class="post-card__actions-likes">
					<span>{{ post.likes }}</span>
					<Icon name="icons:thumbs-up" size="18px" />
				</button>
				<button class="post-card__actions-dislikes">
					<span>{{ post.dislikes }}</span>
					<Icon name="icons:thumbs-down" size="18px" />
				</button>
			</div>
			<div class="post-card__actions-right">
				<button class="post-card__actions-archive">
					<Icon name="icons:archive" size="18px" />
				</button>
				<button class="post-card__actions-edit">
					<Icon name="icons:edit" size="18px" />
					<span>Изменить</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Post } from '~/types/post.types'

interface Props {
	post: Post,
}

const { post } = defineProps<Props>()
</script>

<style scoped>
.post-card {
	border-bottom: 1px solid var(--color-border);
	padding-bottom: 36px;
}

.post-card__header {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 10px;
}

.post-card__name,
.post-card__time {
	font-weight: 300;
	font-size: 14px;
}

.post-card__time {
	color: var(--color-grey);
}

.post-card__title {
	font-weight: 400;
	font-size: 22px;
	margin-bottom: 8px;
}

.post-card__text {
	font-weight: 300;
	line-height: 1.5;
	margin-bottom: 8px;
}

.post-card__actions {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}

.post-card__actions-left {
	display: flex;
	align-items: center;
	gap: 12px;
}

.post-card__actions-left button,
.post-card__actions-right button {
	display: flex;
	align-items: center;
	gap: 6px;
	border: none;
	background-color: transparent;
	cursor: pointer;
	font-family: inherit;
	font-size: 14px;
}

.post-card__actions-left button .iconify {
	color: var(--color-white);
}

.post-card__actions-right {
	display: flex;
	align-items: center;
	gap: 20px;
}
</style>