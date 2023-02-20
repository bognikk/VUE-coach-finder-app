<template>
  <base-card>
    <form @submit.prevent="SubmitForm">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password">
      </div>
      <p v-if="!formIsValid">Please enter a valid email and password (must be at least 6 characters long).</p>
      <base-button>{{ switchButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
    }
  },
  computed: {
    switchButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup'
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup insted';
      } else {
        return 'Login insted'
      }
    }
  },
  methods: {
    SubmitForm() {
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
        return
      }

      if (this.mode === 'login') {
        // ....
      } else {
        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password,
        })
      }
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.form-control {
  @include form-control;
}
</style>