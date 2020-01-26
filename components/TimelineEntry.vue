<template>
  <v-row align="center">
    <v-col
      :cols="entry.text ? 1 : 4"
      order-0
      :order-sm="dateOrder"
      class="timeline-date-wrapper text-center"
      :class="dateClasses"
    >
      <div class="timeline-date">
        {{ entry.date }}
      </div>
    </v-col>

    <v-col v-if="entry.type === 'proposal'" cols="12" :style="entryStyle">
      <TimelineProposalEntry />
    </v-col>

    <v-col
      v-else-if="entry.text"
      :style="entryStyle"
      v-bind="entryProps"
    >
      <v-card>
        <v-card-text style="padding:4px">
          <v-container style="padding:4px">
            <v-row>
              <v-col :sm="(entry.photos && entry.photos.length == 1) ? 8 : 12" >
                <div class="title">{{ entry.title }}</div>
                <div v-html="entry.text"></div>
              </v-col>

              <v-col v-if="entry.photos && entry.photos.length == 1" sm="4">
                <v-img height="120px" :src="entry.photos[0].src" contain @click="showPhoto(entry.photos[0].src)"/>
              </v-col>
            </v-row>

            <v-row v-if="entry.photos && entry.photos.length > 1" justify="center">
              <v-col
                v-for="photo in entry.photos"
                :key="photo.src"
                :sm="getPhotoColumns(photo)"
              >
                <v-img height="120px" :src="photo.src" contain @click="showPhoto(photo.src)"/>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
.timeline-date {
  z-index: 2;
  padding: 10px;
  border-radius: 25px;

  display: table-cell;
  vertical-align: middle;

  font-weight: bold;
  background-color: #a2bd7c;
  color: black;
}

.timeline-date-wrapper {
  display: inline-flex;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  position: relative;
}

.timeline-date-wrapper::after {
  content: "";
  position: absolute;
  border-left: 3px solid #2B6595;
  z-index: 1;
  height: 100%;
  top: 0;
}

.timeline-date-wrapper.timeline-first::after {
  border-image:
    linear-gradient(to bottom, rgba(43, 101, 149, 0), #2B6595 50%) 0 0 0 100%;
}

.timeline-date-wrapper.timeline-last {
  height: 120px;
}

.timeline-last .timeline-date {
  margin-top: -3em;
}

.timeline-date-wrapper.timeline-last::after {
  border-image:
    linear-gradient(to bottom, #2B6595 0% 50%, rgba(43, 101, 149, 0) 100%) 0 0 0 100%;
}

.timeline .v-image {
  cursor: pointer;
}
</style>

<script>
import TimelineProposalEntry from "./TimelineProposalEntry";

export default {
  props: {
    entry: Object,
    first: {
      type: Boolean,
      default: false
    },
    last: {
      type: Boolean,
      default: false
    }
  },

  components: {
    TimelineProposalEntry
  },

  computed: {
    dateClasses() {
      let classes = [];

      if (this.entry.position === "middle") {
        if (this.entry.text) {
          classes.push("offset-sm-5");
        } else {
          classes.push("offset-sm-4");
        }
      }

      if (this.first) {
        classes.push("timeline-first");
      } else if (this.last) {
        classes.push("timeline-last");
      }

      return classes;
    },

    dateOrder() {
      if (this.entry.position === "left") {
        return "0";
      } else if (this.entry.position === "right") {
        return "1"
      }
    },

    entryProps() {
      let cols = this.entry.position === "middle" ? 12 : 10;
      let order = this.entry.position === "left" ? 1 : 0;
      let offset = this.entry.position === "right" ? 1 : 0;

      return {
        "cols": cols,
        "offset-sm": offset,
        "order-1": true,
        "order-sm": order
      }
    },

    entryStyle() {
      if (this.entry.position === "middle") {
        return {
          'padding-top': "0",
          'padding-bottom': "0"
        }
      }
    }
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
