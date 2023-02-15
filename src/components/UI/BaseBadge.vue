<template>
	<span class="badge" :class="type">
		{{ text }}
	</span>
</template>

<script>
export default {
	props: ['type', 'title'],
	computed: {
		text() {
			return this.title.toUpperCase();
		},
	},
};
</script>

<style lang="scss" scoped>
.badge {
	display: inline-block;
	padding: 0.5rem 1.5rem;
	margin: 0.5rem 0.5rem 0.5rem 0;
	color: #000;
	font-weight: 700;
	background-color: #ccc;

	&.frontend {
		background-color: #79a9d1;
	}

	&.backend {
		background-color: #f07167;
	}

	&.career {
		background-color: #fec601;
	}
}
</style>