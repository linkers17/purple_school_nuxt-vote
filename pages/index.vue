<template>
	<div class="posts">
		<PostSort v-model="sort" />
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
</script>

<style scoped>
.posts__list {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 38px;
}
</style>