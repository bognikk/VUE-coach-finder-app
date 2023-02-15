<template>
	<section>FILTER</section>
	<section>
		<base-card>
			<div class="controls">
				<base-button mode="outline">Refresh</base-button>
				<base-button link to="/register">Register as Coach</base-button>
			</div>
			<ul v-if="hasCoaches">
				<coach-item
					v-for="coach in filterCoaches"
					:key="coach.id"
					:id="coach.id"
					:first-name="coach.firstName"
					:last-name="coach.lastName"
					:rate="coach.hourlyRate"
					:areas="coach.areas"
				></coach-item>
			</ul>
			<h3 v-else>No coaches found.</h3>
		</base-card>
	</section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
	components: {
		CoachItem,
	},
	computed: {
		filterCoaches() {
			return this.$store.getters['coaches/coachesGetter']; //namespace/getter name
		},
		hasCoaches() {
			return this.$store.getters['coaches/hasCoaches'];
		},
	},
};
</script>

<style lang="scss" scoped>
ul {
	padding: 0;
	margin: 0;
	list-style: none;
}

.controls {
	display: flex;
	justify-content: space-between;
}
</style>