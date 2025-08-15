<template>
	<div class="sort">
		<button
			class="sort-btn"
			:class="{ active: sort === PostSortList.DATE }"
			@click="sort = PostSortList.DATE"
		>По дате</button>
		<button
			class="sort-btn"
			:class="{ active: sort === PostSortList.RATING }"
			@click="sort = PostSortList.RATING"
		>По рейтингу</button>
	</div>
</template>

<script lang="ts" setup>
import { PostSortList } from '~/types/post.types';

const sort = defineModel<PostSortList>()
</script>

<style scoped>

.sort {
	border-bottom: 1px solid var(--color-border);
	padding-bottom: 16px;
	margin-bottom: 36px;
	display: flex;
	align-items: center;
	gap: 42px;
}

.sort-btn {
	background-color: transparent;
	border: none;
	font-size: 16px;
	font-weight: 400;
	font-family: inherit;
	cursor: pointer;
}

.sort-btn:not(.active) {
	color: var(--color-grey);
}
</style>