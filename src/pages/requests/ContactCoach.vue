<template>
	<form @submit.prevent="submitForm">
		<div class="form-control">
			<label for="email">Your E-Mail</label>
			<input type="email" id="email" v-model.trim="email" />
		</div>
		<div class="form-control">
			<label for="message">Message</label>
			<textarea rows="5" id="message" v-model.trim="message"></textarea>
		</div>
		<p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message.</p>
		<div class="actions">
			<base-button>Send Message</base-button>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			message: '',
			formIsValid: true,
		};
	},
	methods: {
		submitForm() {
			this.formIsValid = true;
			if (
				this.email === '' ||
				!this.email.includes('@') ||
				this.message === ''
			) {
				this.formIsValid = false;
				return;
			}
			this.$store.dispatch('requests/contactCoach', {
				email: this.email,
				message: this.message,
				coachId: this.$route.params.id
			});
			this.$router.replace('/coaches');
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
@import '../../styles/settings.scss';

.form-control {
	@include form-control;
}

.errors {
	font-weight: bold;
	color: $alert-red;
}

.actions {
	text-align: center;
}
</style>