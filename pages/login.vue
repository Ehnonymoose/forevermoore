<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card>
        <v-card-text>
          <v-avatar size="100" class="login-avatar">
            <img src="/images/lift.jpg" alt="Dan and Christine!">
          </v-avatar>
          <v-form @submit.prevent class="text-center" style="margin-top: 48px">
            <p class="subtitle-1">
              Welcome to our wedding website!<br />
              Enter the password we sent you to continue!
            </p>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"

              @keydown.enter="submit"
              :disabled="submitting"
              v-model="password"
              :error="error.length > 0"
              :error-messages="error"
              required
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            type="submit"
            @click="submit"
            :loading="submitting"
          >
            Login
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.login-avatar {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 3px solid $wedding-blue;
}
</style>

<script>
import Vue from 'vue';

export default {
  data: () => ({
    password: "",
    error: "",
    submitting: false
  }),

  methods: {
    submit() {
      console.log("submit() called");

      this.submitting = true;
      this.error = "";

      this.$store
        .dispatch('login', { password: this.password })
        .then(() => {
          this.submitting = false;
          this.$router.push('/');
        })
        .catch((arg) => {
          this.submitting = false;

          console.log("Uh oh!", arg);
          this.error = arg.message;
        });
    }
  }
}
</script>