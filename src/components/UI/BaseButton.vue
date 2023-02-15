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
button,
a {
	display: inline-block;
	padding: 0.75rem 1.5rem;
	margin-right: 0.5rem;
	border: 1px solid #35495e;
	border-radius: 30px;
	color: #fff;
	font: inherit;
	font-weight: 700;
	text-decoration: none;
	background-color: #35495e;
	cursor: pointer;

	&:hover,
	&:active {
		color: #35495e;
		border-color: #42b883;
		background-color: #42b883;
	}

	&.flat {
		color: #35495e;
		border: none;
		background-color: transparent;
	}

	&.outline {
		color: #35495e;
		border-color: #35495e;
		background-color: transparent;
	}

	&.flat:hover,
	&.flat:active,
	&.outline:hover,
	&.outline:active {
		background-color: #bed3e9;
	}
}
</style>
