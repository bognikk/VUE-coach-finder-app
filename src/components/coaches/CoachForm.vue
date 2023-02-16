<template>
	<form @submit.prevent="submitForm">
		<div class="form-control" :class="{ invalid: !firstName.isValid }">
			<label for="firstname">Firstname</label>
			<input
				type="text"
				id="firstname"
				v-model.trim="firstName.val"
				@blur="clearValidity('firstName')"
			/>
			<p v-if="!firstName.isValid">First name must not be empty.</p>
		</div>
		<div class="form-control" :class="{ invalid: !lastName.isValid }">
			<label for="lastname">Lastname</label>
			<input
				type="text"
				id="lastname"
				v-model.trim="lastName.val"
				@blur="clearValidity('lasrName')"
			/>
			<p v-if="!lastName.isValid">Last name must not be empty.</p>
		</div>
		<div class="form-control" :class="{ invalid: !description.isValid }">
			<label for="description">Description</label>
			<textarea
				id="description"
				rows="5"
				v-model.trim="description.val"
				@blur="clearValidity('description')"
			></textarea>
			<p v-if="!description.isValid">Description must not be empty.</p>
		</div>
		<div class="form-control" :class="{ invalid: !rate.isValid }">
			<label for="rate">Hourly Rate</label>
			<input
				type="number"
				id="rate"
				v-model.number="rate.val"
				@blur="clearValidity('rate')"
			/>
			<p v-if="!rate.isValid">Rate must be greater than 0.</p>
		</div>
		<div class="form-control" :class="{ invalid: !areas.isValid }">
			<h3>Areas of Expertise</h3>
			<div>
				<input
					type="checkbox"
					id="frontend"
					value="frontend"
					v-model="areas.val"
					@blur="clearValidity('areas')"
				/>
				<label for="frontend">Frontend Development</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="backend"
					value="backend"
					v-model="areas.val"
					@blur="clearValidity('areas')"
				/>
				<label for="backend">Backend Development</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="career"
					value="career"
					v-model="areas.val"
					@blur="clearValidity('areas')"
				/>
				<label for="career">Career Advisory</label>
			</div>
			<p v-if="!areas.isValid">At least one expertise must be selected.</p>
		</div>
		<p v-if="!formIsValid">Please fix the above errors and submit again.</p>
		<base-button>Register</base-button>
	</form>
</template>

<script>
export default {
	emits: ['save-data'],
	data() {
		return {
			firstName: {
				val: '',
				isValid: true,
			},
			lastName: {
				val: '',
				isValid: true,
			},
			description: {
				val: '',
				isValid: true,
			},
			rate: {
				val: null,
				isValid: true,
			},
			areas: {
				val: [],
				isValid: true,
			},
			formIsValid: true,
		};
	},
	methods: {
		clearValidity(input) {
			this[input].isValid = true;
		},
		validateForm() {
			this.formIsValid = true;
			if (this.firstName.val === '') {
				this.firstName.isValid = false;
				this.formIsValid = false;
			}
			if (this.lastName.val === '') {
				this.lastName.isValid = false;
				this.formIsValid = false;
			}
			if (this.description.val === '') {
				this.description.isValid = false;
				this.formIsValid = false;
			}
			if (!this.rate.val || this.rate.val < 0) {
				this.rate.isValid = false;
				this.formIsValid = false;
			}
			if (this.areas.val.length === 0) {
				this.areas.isValid = false;
				this.formIsValid = false;
			}
		},
		submitForm() {
			this.validateForm();

			if (!this.formIsValid) {
				return;
			}

			const formData = {
				first: this.firstName.val,
				last: this.lastName.val,
				desc: this.description.val,
				rate: this.rate.val,
				areas: this.areas.val,
			};

			this.$emit('save-data', formData);
		},
	},
};
</script>

<style lang="scss" scoped>
.form-control {
	margin: 0.5rem 0;

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	input,
	textarea {
		display: block;
		max-width: 100%;
		width: 100%;
		border: 1px solid #ccc;
		font: inherit;

		&:focus {
			border-color: #42b883;
			background-color: #e3fff2;
		}
	}

	input[type='checkbox'] {
		display: inline;
		width: auto;
		border: none;

		&:focus {
			border-color: #42b883;
			background-color: #e3fff2;
		}

		& + label {
			display: inline;
			margin: 0 0 0 0.5rem;
			font-weight: normal;
		}
	}

	h3 {
		margin: 0.5rem 0;
		font-size: 1rem;
	}

	&.invalid {
		label {
			color: #dd0426;
		}

		input,
		textarea {
			border: 1px solid #dd0426;
		}
	}
}
</style>