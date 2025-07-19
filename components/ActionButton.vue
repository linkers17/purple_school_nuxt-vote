<template>
	<button class="button" :class="`button_${size}`">
		<slot />
	</button>
</template>

<script lang="ts" setup>
interface Props {
	size?: 'large' | 'small',
}

const {
	size = 'large',
} = defineProps<Props>()
</script>

<style scoped>
.button {
	border: none;
	background-color: var(--color-black);
	color: var(--color-white);
	border-radius: 20px;
	font-size: 16px;
	font-weight: 500;
	padding: 10px;
	font-family: inherit;
	cursor: pointer;
}

.button:hover {
	background-color: var(--color-black-hover);
}

.button_large {
	width: 300px;
}

.button_small {
	width: 140px;
}
</style>