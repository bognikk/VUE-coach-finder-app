<template>
	<form @submit.prevent="submitForm">
		<div class="form-control">
			<label for="firstname">Firstname</label>
			<input type="text" id="firstname" v-model.trim="firstName" />
		</div>
		<div class="form-control">
			<label for="lastname">Lastname</label>
			<input type="text" id="lastname" v-model.trim="lastName" />
		</div>
		<div class="form-control">
			<label for="description">Description</label>
			<textarea id="description" rows="5" v-model.trim="description"></textarea>
		</div>
		<div class="form-control">
			<label for="rate">Hourly Rate</label>
			<input type="number" id="rate" v-model.number="rate" />
		</div>
		<div class="form-control">
			<h3>Areas of Expertise</h3>
			<div>
				<input type="checkbox" id="frontend" value="frontend" v-model="areas" />
				<label for="frontend">Frontend Development</label>
			</div>
			<div>
				<input type="checkbox" id="backend" value="backend" v-model="areas" />
				<label for="backend">Backend Development</label>
			</div>
			<div>
				<input type="checkbox" id="career" value="career" v-model="areas" />
				<label for="career">Career Advisory</label>
			</div>
		</div>
		<base-button>Register</base-button>
	</form>
</template>

<script>
export default {
	emits: ['save-data'],
	data() {
		return {
			firstName: '',
			lastName: '',
			description: '',
			rate: null,
			areas: [],
		};
	},
	methods: {
		submitForm() {
			const formData = {
				first: this.firstName,
				last: this.lastName,
				desc: this.description,
				rate: this.rate,
				areas: this.areas,
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

	// input[type='checkbox'] + label {
	// 	margin: 0 0 0 0.5rem;
	// 	display: inline;
	// 	font-weight: normal;
	// }

	input,
	textarea {
		display: block;
		width: 100%;
		max-width: 100%;
		border: 1px solid #ccc;
		font: inherit;

		&:focus {
			border-color: #42b883;
			outline: none;
			background-color: #e3fff2;
		}
	}

	input[type='checkbox'] {
		display: inline;
		width: auto;
		border: none;

		&:focus {
			border-color: #42b883;
			outline: none;
			background-color: #e3fff2;
		}

		& + label {
			margin: 0 0 0 0.5rem;
			display: inline;
			font-weight: normal;
		}
	}

	h3 {
		margin: 0.5rem 0;
		font-size: 1rem;
	}

	.invalid {
		label {
			color: red;
		}

		input,
		textarea {
			border: 1px solid red;
		}
	}
}
</style>