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
				<li>
					<router-link to="/requests">Requests</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>


<style lang="scss" scoped>
header {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 5rem;
	background-color: #42b883;

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		margin: auto;

		h1 {
			margin: 0;

			a {
				margin: 0;
				color: #fff;
				text-decoration: none;

				&:hover,
				&:active,
				&.router-link-active {
					text-decoration: underline;
					color: #35495e;
				}
			}
		}

		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0;
			margin: 0;
			list-style: none;

			li {
				margin: 0 0.5rem;

				a {
					display: inline-block;
					padding: 0.75rem 1.5rem;
					border: 1px solid transparent;
					color: #35495e;
					font-weight: 700;
					text-decoration: none;

					&:active,
					&:hover,
					&.router-link-active {
						outline: 2px solid #35495e;
					}
				}
			}
		}
	}
}
</style>