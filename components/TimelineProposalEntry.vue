<template>
  <v-card class="proposal">
    <v-card-title class="title" style="justify-content: center">The Proposal</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-img width="100%" src="/images/timeline/proposal.jpg" contain />
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <div class="text-center subheader">His Perspective</div>
            <p>asdufhasidufhaslidfaisdfa</p>
          </v-col>

          <v-col cols="12" md="6">
            <div class="text-center">Her Perspective</div>
            <p>asdufhasidufhaslidfaisdfa</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
.proposal .title {
  font-family: $script-font-family !important;
}
</style>