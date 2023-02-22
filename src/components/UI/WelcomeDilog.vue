<template>
  <base-dialog :show="!!showWelcome" title="Welcome to the Coach Finder app!" @close="closeWelcomeModal">
    <p>This app features core Vue3 concepts such as VUEX, user AUTHENTICATION, ROUTING, FORM and from VALIDATION,
      ANIMATIONS, and other Vue essentials.
    </p>
    <p>Please try it out!</p>
    <p>Sign up, then register as a coach, and in the description area leave feedback if you feel like it.</p>
    <p>In the next step, view the coach's details and try sending a message to the coach.</p>
    <p>The requests page shows only messages that you received as a registered coach, so try sending a message to yourself
      just for fun.</p>
    <p>Thanks!</p>
    <p>- Nikola -</p>
  </base-dialog>
</template>

<script>
export default {
  data() {
    return {
      showWelcome: false,
    }
  },
  methods: {
    closeWelcomeModal() {
      this.showWelcome = false;
    }
  },
  mounted() {
    this.showWelcome = true;
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/settings.scss';

p {
  font-size: 19px;
  font-weight: 700;
  color: $brand-two;

  @media (min-width: $screen-xs) {
    padding: 0 2rem;
  }

  &:last-of-type {
    text-align: right;
    font-size: 23px;
  }
}
</style>