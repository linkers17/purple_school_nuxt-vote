<template>
	<div class="input">
		<Icon
			v-if="icon"
			:name="`icons:${icon}`"
			size="24px"
			class="input-icon"
		/>
		<input
			v-bind="$attrs"
			v-model="value"
			class="input-field"
		>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	icon?: string,
}

const { icon } = defineProps<Props>()

const value = defineModel()
</script>

<style scoped>
.input {
	border: 1px solid var(--color-border);
	border-radius: 20px;
	padding: 8px 14px;
	display: flex;
	gap: 8px;
	width: 100%;
	max-width: 300px;
}

.input-field {
	border: none;
	font-family: inherit;
	background-color: transparent !important;
	font-size: 16px;
	flex-grow: 1;
}
</style>