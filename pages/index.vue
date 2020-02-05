<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12>
      <v-img src="/images/goofy-banner.jpg" />
    </v-flex>

    <v-flex xs6 class="text-center my-5">
      <p>Hi everyone!</p>
      <p>We're incredibly excited to get married, and even more excited to share that day with each and every one of you!</p>
      <p>Please click around a bit to learn more about the celebration (and about us!).</p>
    </v-flex>

    <v-flex xs12>
      <v-img src="/images/sweet-banner.jpg" />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: "Dan ♥ Christine"
    }
  }
}
</script>