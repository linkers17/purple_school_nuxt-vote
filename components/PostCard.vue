<template>
	<div class="post-card">
		<div class="post-card__header">
			<img src="/purple.png" alt="post logo" class="post-card__logo">
			<span class="post-card__name">PurpleSchool</span>
			<span class="post-card__time">{{ post.published_at }}</span>
		</div>
		<NuxtLink
			class="post-card__title"
			:to="{ name: 'post-id', params: { id: post.id } }"
		>
			<h2>{{ post.title }}</h2>
		</NuxtLink>
		<p class="post-card__text">{{ post.content }}</p>
		<div class="post-card__actions">
			<div class="post-card__actions-left">
				<button
					class="post-card__actions-likes"
					:class="{ active: favoriteState?.action === PostFavoritesEnum.LIKED }"
					@click="likePost"
				>
					<span>{{ post.likes }}</span>
					<Icon name="icons:thumbs-up" size="18px" />
				</button>
				<button
					class="post-card__actions-dislikes"
					:class="{ active: favoriteState?.action === PostFavoritesEnum.DISLIKED }"
					@click="dislikePost"
				>
					<span>{{ post.dislikes }}</span>
					<Icon name="icons:thumbs-down" size="18px" />
				</button>
			</div>
			<div class="post-card__actions-right">
				<button class="post-card__actions-archive">
					<Icon name="icons:archive" size="18px" />
				</button>
				<NuxtLink
					class="post-card__actions-edit"
					:to="{ name: 'post-id-edit', params: { id: post.id } }"
				>
					<Icon name="icons:edit" size="18px" />
					<span>Изменить</span>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { type Post, type PostFavorite, PostFavoritesEnum } from '~/types/post.types'

const config = useRuntimeConfig()
const API_URL = config.public.apiurl

interface Props {
	post: Post,
}

const { post } = defineProps<Props>()

const favoritesStore = useFavoritesStore()

const { favorites } = storeToRefs(favoritesStore)

const favoriteState = computed<PostFavorite | undefined>(() => favorites.value.find(f => f.id === post.id))

const likePost = async () => {
	const findPost = favorites.value.find(post => post.id === post.id)
	if (findPost && findPost.action === PostFavoritesEnum.LIKED)
		return
	const data = await $fetch<Post>(`${API_URL}/posts/${post.id}/like`)
	favoritesStore.likePost(data.id)
}

const dislikePost = async () => {
	const findPost = favorites.value.find(post => post.id === post.id)
	if (findPost && findPost.action === PostFavoritesEnum.DISLIKED)
		return
	const data = await $fetch<Post>(`${API_URL}/posts/${post.id}/dislike`)
	favoritesStore.dislikePost(data.id)
}
</script>

<style scoped>
.post-card {
	border-bottom: 1px solid var(--color-border);
	padding-bottom: 36px;
	text-decoration: none;
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
	margin-bottom: 8px;
	color: var(--color-black);
	text-decoration: none;
}

.post-card__title h2 {
	font-weight: 400;
	font-size: 22px;
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

.post-card__actions-edit {
	color: var(--color-black);
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 6px;
}
</style>