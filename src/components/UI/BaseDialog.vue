<template>
	<teleport to="body">
		<div v-if="show" @click="tryClose" class="backdrop"></div>
		<transition name="dialog">
			<dialog open v-if="show">
				<header>
					<slot name="header">
						<h2>{{ title }}</h2>
					</slot>
				</header>
				<section>
					<slot></slot>
				</section>
				<menu v-if="!fixed">
					<slot name="actions">
						<base-button @click="tryClose">Close</base-button>
					</slot>
				</menu>
			</dialog>
		</transition>
	</teleport>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			required: true,
		},
		title: {
			type: String,
			required: false,
		},
		fixed: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: ['close'],
	methods: {
		tryClose() {
			if (this.fixed) {
				return;
			}
			this.$emit('close');
		},
	},
};
</script>

<style lang="scss" scoped>
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.75);
}

dialog {
	position: fixed;
	top: 20vh;
	left: 10%;
	z-index: 100;
	width: 80%;
	padding: 0;
	margin: 0;
	border: none;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	overflow: hidden;
	background-color: #fff;

	header {
		width: 100%;
		padding: 1rem;
		color: #fff;
		background-color: #42b883;

		h2 {
			margin: 0;
		}
	}

	section {
		padding: 1rem;
	}

	menu {
		display: flex;
		justify-content: flex-end;
		padding: 1rem;
		margin: 0;
	}
}

.dialog-enter-from,
.dialog-leave-to {
	opacity: 0;
	transform: scale(0.8);
}

.dialog-enter-active {
	transition: all 0.3s ease-out;
}
.dialog-leave-active {
	transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
	opacity: 1;
	transform: scale(1);
}

@media (min-width: 768px) {
	dialog {
		left: calc(50% - 20rem);
		width: 40rem;
	}
}
</style>