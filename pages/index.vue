<template>
  <v-row
    column
    justify-center
    align-center
  >
    <v-col cols="12">
      <v-img src="/images/goofy-banner.jpg" />
    </v-col>

    <v-col cols="6" offset="3" class="text-center my-5">
      <p>Hi everyone!</p>
      <p>We're incredibly excited to get married, and even more excited to share that day with each and every one of you!</p>
      <p>Please click around a bit to learn more about the celebration (and about us!).</p>
    </v-col>

    <v-col cols="12">
      <v-img src="/images/sweet-banner.jpg" />
    </v-col>
  </v-row>
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