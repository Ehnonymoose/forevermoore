<template>
  <v-container class="timeline">
    <!-- Show the first timeline entry -->
    <TimelineEntry first :entry="entries[0]" @showPhoto="showPhoto" />

    <!-- For each other entry, generate a path from the previous entry to the next one, then the next entry. -->
    <template v-for="(entry, i) in entries.slice(1, -1)">
      <TimelinePath :start="entries[i]" :end="entry" :key="'path-' + i" />
      <TimelineEntry :entry="entry" :key="'entry-' + i" @showPhoto="showPhoto" />
    </template>

    <!-- Aaaand one last path/entry for the final thing. -->
    <TimelinePath :start="entries[entries.length - 2]" :end="entries[entries.length - 1]" />
    <TimelineEntry last :entry="entries[entries.length - 1]" @showPhoto="showPhoto" />

    <!-- Build a lightbox containing a carousel with all of the photos. -->
    <client-only>
      <v-gallery
        :images="allPhotos"
        :index="galleryImageId"
        @close="galleryImageId = null"
      />
    </client-only>
  </v-container>
</template>

<script>
import TimelineEntry from "./TimelineEntry";
import TimelinePath from "./TimelinePath";

export default {
  props: {
    entries: Array
  },

  components: {
    TimelineEntry,
    TimelinePath
  },

  data: () => ({
    galleryImageId: null
  }), 

  computed: {
    // Gathers all photos in the timeline into a single list, so we can feed it to a carousel.
    allPhotos() {
      return this.entries.flatMap(entry => entry.photos ? entry.photos : []);
    }
  },

  methods: {
    showPhoto(path) {
      this.galleryImageId = this.allPhotos.findIndex(photo => photo.href === path);
    }
  }
}
</script>