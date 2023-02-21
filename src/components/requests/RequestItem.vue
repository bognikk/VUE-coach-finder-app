<template>
	<base-card>
		<li>
			<div>
				<a :href="emailLink">{{ email }}</a>
			</div>
			<p>{{ message }}</p>
		</li>
	</base-card>
</template>

<script>
export default {
	props: ['email', 'message'],
	computed: {
		emailLink() {
			return 'mailto:' + this.email;
		}
	}
}
</script>

<style lang="scss" scoped>
a {
	color: #35495e;
	text-decoration: none;
	font-weight: bold;

	&:hover,
	&:active {
		color: #42b883;
		text-decoration: underline;
	}
}

p {
	margin: 0.5rem 0 0 0;
}
</style>