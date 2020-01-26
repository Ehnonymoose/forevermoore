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
    <v-gallery
      :images="allPhotos.map(photo => photo.src)"
      :index="galleryImageId"
      @close="galleryImageId = null"
    />
  </v-container>
</template>

<style>
.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.gallery {
  box-shadow: none;
  width: 80%;
  background-color: black;
}
</style>

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
    showGallery: false,
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
      this.galleryImageId = this.allPhotos.findIndex(photo => photo.src === path);
    }
  }
}
</script>