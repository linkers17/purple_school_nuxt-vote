<template>
	<div class="pagination">
		<button
			v-for="num in Array.from({length: totalPages}, (_, i) => i + 1)"
			:key="num"
			class="pagination__btn"
			:class="{ active: num === Number(page) }"
			@click="page = num"
		>{{ num }}</button>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	totalPages: number,
}

const { totalPages = 1 } = defineProps<Props>()

const page = defineModel<number | string>()
</script>

<style scoped>
.pagination {
	margin-top: 58px;
	display: flex;
	align-items: center;
	gap: 16px;
}

.pagination__btn {
	background-color: transparent;
	border: none;
	font-size: 16px;
	font-weight: 400;
	font-family: inherit;
	cursor: pointer;
	padding-right: 16px;
	border-right: 1px solid var(--color-border);
}

.pagination__btn:last-child {
	border-right: none;
}

.pagination__btn:not(.active) {
	color: var(--color-grey);
}
</style>