<template>
  <v-card class="highlight pt-4">
    <v-card-title class="title" style="justify-content: center">{{ entry.title }}</v-card-title>
    <v-card-text class="pb-2">
      <v-container class="pb-0">
        <v-row>
          <v-img width="100%" :src="entry.mainImage" contain />
        </v-row>

        <v-row class="mt-2">
          <TimelineProposalEntryContents v-if="entry.which === 'proposal'" />
          <TimelineElopementEntryContents v-else-if="entry.which === 'elopement'" />
          <TimelinePhotoGallery v-if="entry.photos" />
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
.highlight .title {
  font-family: $script-font-family !important;
  font-size: 2.5rem !important;
  color: $wedding-blue;
  margin-bottom: -20px;
}
</style>

<script>
import TimelineProposalEntryContents from "./TimelineProposalEntryContents.vue";
import TimelineElopementEntryContents from "./TimelineElopementEntryContents.vue";
import TimelinePhotoGallery from "./TimelinePhotoGallery.vue";

export default {
  props: {
    entry: Object
  }
}
</script>