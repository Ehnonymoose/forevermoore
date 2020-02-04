<template>
  <v-card class="proposal pt-4">
    <v-card-title class="title" style="justify-content: center">The Proposal</v-card-title>
    <v-card-text class="pb-2">
      <v-container class="pb-0">
        <v-row>
          <v-img width="100%" src="/images/timeline/proposal.jpg" contain />
        </v-row>

        <v-row class="mt-2">
          <v-col cols="12" md="6" class="his-perspective">
            <div class="text-center perspective-title mb-2">His Perspective</div>
            <div class="perspective-content">
              <p>asdufhasidufhaslidfaisdfa</p>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="her-perspective">
            <div class="text-center perspective-title mb-2">Her Perspective</div>
            <div class="perspective-content">
              <p>asdufhasidufhaslidfaisdfa</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
.proposal .title {
  font-family: $script-font-family !important;
  font-size: 2.5rem !important;
  color: $wedding-blue;
  margin-bottom: -20px;
}

@media screen and (min-width: 960px) {
  .her-perspective {
    border-left: 1px solid #c8c8c8;
  }

  .his-perspective {
    border-right: 1px solid #c8c8c8;
  }
}

.perspective-title {
  font-family: $sans-serif-font;
  font-size: 1.2rem;
  color: $wedding-blue;
}
</style>