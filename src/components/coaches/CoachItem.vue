<template>
	<base-card>
		<li>
			<h3>{{ fullName }}</h3>
			<h4>${{ rate }}/hour</h4>
			<div>
				<base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
			</div>
			<div class="actions">
				<!-- <base-button mode="outline" link :to="coachContactLink"
					>Contact</base-button
				> -->
				<base-button link :to="coachContactLink">View Details</base-button>
			</div>
		</li>
	</base-card>
</template>

<script>
export default {
	props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
	computed: {
		fullName() {
			return this.firstName + ' ' + this.lastName;
		},
		coachContactLink() {
			return this.$route.path + '/' + this.id + '/contact'; // /coaches/c1/contact
		},
		// coachDetailsLink() {
		// 	return this.$route.path + '/' + this.id; // /coaches/c1
		// },
	},
};
</script>

<style lang="scss" scoped>
li {
	h3 {
		font-size: 1.5rem;
	}

	h3,
	h4 {
		margin: 0.5rem 0;
	}

	div:first-of-type {
		overflow: hidden;
	}

	div {
		margin: 0.5rem 0;

		&.actions {
			display: flex;
			justify-content: flex-end;
		}
	}
}
</style>