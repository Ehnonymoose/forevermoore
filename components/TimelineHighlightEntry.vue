<template>
  <v-card class="highlight pt-4">
    <v-card-title class="title" style="justify-content: center">{{ entry.title }}</v-card-title>
    <v-card-text class="pb-2">
      <v-container class="pb-0">
        <v-row>
          <v-img width="100%" max-height="800px" :src="entry.mainImage" contain @click="showMainImage" />
        </v-row>

        <TimelineProposalEntryContents v-if="entry.which === 'proposal'" />
        <TimelineElopementEntryContents v-else-if="entry.which === 'elopement'" />
        <TimelineEngagementShootEntryContents v-else-if="entry.which === 'engagement-shoot'" />
        <TimelinePhotoGallery v-if="entry.photos" :photos="entry.photos" @showPhoto="showPhoto" />
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
import TimelineEngagementShootEntryContents from "./TimelineEngagementShootEntryContents";  
import TimelinePhotoGallery from "./TimelinePhotoGallery.vue";

export default {
  props: {
    entry: Object
  },

  components: {
      TimelineProposalEntryContents,
      TimelineElopementEntryContents,
      TimelineEngagementShootEntryContents,
      TimelinePhotoGallery
  },

  methods: {
      showPhoto(id) { 
          this.$emit("showPhoto", id);
      },

      showMainImage() {
        this.$emit("showPhoto", this.entry.mainImage);
      }
  }
}
</script>