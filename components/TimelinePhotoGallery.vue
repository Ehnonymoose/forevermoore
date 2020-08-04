<template>
  <v-row justify="center">
    <v-col v-for="photo in entry.photos" :key="photo.href" :sm="getPhotoColumns(photo)">
      <v-hover v-slot:default="{ hover }">
        <v-img height="120px" :src="photo.href" contain eager @click="showPhoto(photo.href)">
          <v-fade-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out white v-card--reveal"
              style="height: 100%; opacity: 0.5"
            ></div>
          </v-fade-transition>
        </v-img>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    photos: Array
  },
    
  methods: {
    showPhoto(id) {
      this.$emit("showPhoto", id);
    },

    getPhotoColumns(photo) {
      // If this photo has a set number of columns, use that.
      if (photo.cols) {
        return photo.cols;
      }

      // If it doesn't, figure out how many columns are allocated already for this entry.
      let unallocatedCols = 12 - this.entry.photos.reduce((total, photo) => total + (photo.cols || 0), 0);

      // Then figure out how many photos the unallocated columns need to split up over.
      let unsetPhotos = 0;
      this.entry.photos.forEach(photo => {
        if (!photo.cols) {
          unsetPhotos++;
        }
      });

      // Now divide up the unallocated space evenly over those columns.
      return Math.max(1, Math.floor(unallocatedCols / unsetPhotos));
    }
  }
}
</script>