<template>
	<button v-if="!link" :class="mode">
		<slot></slot>
	</button>
	<router-link v-else :to="to" :class="mode">
		<slot></slot>
	</router-link>
</template>

<script>
export default {
	props: {
		mode: {
			type: String,
			required: false,
			default: null,
		},
		link: {
			type: Boolean,
			required: false,
			default: false,
		},
		to: {
			type: String,
			required: false,
			default: '/',
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../styles/settings.scss';
@import '../../styles/settings.scss';

button,
a {
	display: inline-block;
	padding: 0.75rem 1.5rem;
	margin-right: 0.5rem;
	border: 1px solid $brand-two;
	border-radius: 30px;
	color: #fff;
	font: inherit;
	font-weight: 700;
	text-decoration: none;
	background-color: $brand-two;
	cursor: pointer;

	&:hover,
	&:active,
	&:focus {
		color: $brand-two;
		border-color: $brand-one;
		background-color: $brand-one;
		outline-color: $brand-two;
	}

	&:focus {
		outline: 2px solid webkit-focus-ring-color;
		outline-offset: -2px;
	}

	&.flat {
		color: $brand-two;
		border: none;
		background-color: transparent;
	}

	&.outline {
		color: $brand-two;
		border-color: $brand-two;
		background-color: transparent;
	}

	&.flat:hover,
	&.flat:active,
	&.outline:hover,
	&.outline:active {
		background-color: $brand-two-light;
	}
}
</style>
