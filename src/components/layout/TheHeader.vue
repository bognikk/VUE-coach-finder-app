<template>
	<header>
		<nav>
			<h1>
				<router-link to="/">Find a Coach</router-link>
			</h1>
			<ul>
				<li>
					<router-link to="/coaches">All Coaches</router-link>
				</li>
				<li v-if="isLoggedIn">
					<router-link to="/requests">Requests</router-link>
				</li>
				<li v-else>
					<router-link to="/auth">Login</router-link>
				</li>
				<li v-if="isLoggedIn">
					<base-button @click="logout">Logout</base-button>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	computed: {
		isLoggedIn() {
			return this.$store.getters.isAuthenticated;
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('logout');
			this.$router.replace('/coaches');
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../styles/settings.scss';

header {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 5rem;
	background-color: $brand-one;

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin: 0 auto 19px;

		@media (min-width: $screen-sm) {
			justify-content: space-between;
			flex-wrap: nowrap;
			max-width: 40rem;
			width: 90%;
			margin: auto;
		}

		h1 {
			width: 100%;
			text-align: center;

			@media (min-width: $screen-sm) {
				width: auto;
				margin: 0;
			}

			a {
				margin: 0;
				color: #fff;
				text-decoration: none;

				&:hover,
				&:active,
				&.router-link-active {
					text-decoration: underline;
					color: $brand-two;
				}
			}
		}

		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			padding: 0;
			margin: 0;
			list-style: none;

			@media (min-width: $screen-sm) {
				flex-wrap: nowrap;
			}

			li {
				margin: 0 0.5rem;
				width: 100%;
				text-align: center;

				@media (min-width: $screen-sm) {
					width: auto;
					text-align: center;
				}

				button {
					width: 100%;
				}

				a {
					display: inline-block;
					width: 100%;
					padding: 0.75rem 1.5rem;
					border: 1px solid transparent;
					color: $brand-two;
					font-weight: 700;
					text-decoration: none;


					&:active,
					&:hover,
					&.router-link-active {
						outline: 2px solid $brand-two;
					}
				}
			}
		}
	}
}
</style>