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
@import '../../styles/settings.scss';

.badge {
	display: inline-block;
	width: 100%;
	padding: 0.5rem 1.5rem;
	margin: 0.5rem 0.5rem 0.5rem 0;
	color: #000;
	font-weight: 700;
	background-color: #ccc;

	@media (min-width: $screen-xs) {
		width: auto;
	}

	&.frontend {
		background-color: $badge-frontend;
	}

	&.backend {
		background-color: $badge-backend;
	}

	&.career {
		background-color: $badge-career;
	}
}
</style>