<template>
	<div class="posts">
		<NuxtLink
			v-if="user"
			:to="{ name: 'post-create' }"
			class="posts-add"
		>
			<button class="posts-add__btn">
				<Icon name="material-symbols:add" size="24px" />
			</button>
			<span>Добавить новое обновление для голосования</span>
		</NuxtLink>
		<PostSort v-model="sort" />
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
		<PostPagination
			v-if="posts && posts.total_pages > 1"
			v-model="page"
			:total-pages="posts.total_pages"
		/>
	</div>
</template>

<script lang="ts" setup>
import { PostSortList, type PostsResponse } from '~/types/post.types'
import PostPagination from '~/components/PostPagination.vue';

const config = useRuntimeConfig()
const API_URL = config.public.apiurl

const route = useRoute()
const router = useRouter()

const authStore = useAuthStore()
const { user }  =storeToRefs(authStore)

const sort = ref<PostSortList>(route.query.sort as PostSortList || PostSortList.RATING)
const page = ref<number | string>(route.query.page?.toString() || 1)

const query = computed(() => ({
	page: page.value || undefined,
	page_size: 10,
	sort: sort.value || undefined,
}))

const { data: posts } = await useFetch<PostsResponse>(`${API_URL}/posts`, { query })

watchEffect(() => {
	router.replace({
		query: {
			page: page.value,
			sort: sort.value,
		},
	})
})

const fetchPosts = async () => {
	try {
		posts.value = await $fetch<PostsResponse>(`${API_URL}/posts`)
	} catch (error) {
		console.log(error)
	}
}

useSeoMeta({
	description: 'Главная страница VoteApp',
	title: 'Главная',
})
</script>

<style scoped>
.posts__list {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 38px;
}

.posts-add {
	margin-bottom: 28px;
	display: flex;
	align-items: center;
	gap: 8px;
	text-decoration: none;
	color: var(--color-black);
	font-weight: 300;
}

.posts-add__btn {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: none;
	padding: 5px;
}
</style>