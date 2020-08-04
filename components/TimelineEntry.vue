<template>
  <v-row align="center" :id="entry.anchor">
    <a v-if="entry.anchor" :name="entry.anchor" />
    <v-col
      :cols="entry.position !== 'middle' ? 1 : 4"
      order-0
      :order-sm="dateOrder"
      class="timeline-date-wrapper text-center"
      :class="dateClasses"
    >
      <div class="timeline-date">
        {{ entry.date }}
      </div>
    </v-col>

    <v-col v-if="entry.type === 'highlight'" cols="12" style="padding-top: 0; padding-bottom: 0;">
      <TimelineHighlightEntry :entry="entry" @showPhoto="showPhoto" />
    </v-col>

    <v-col
      v-else
      :style="entryStyle"
      v-bind="entryProps"
    >
      <v-card>
        <v-card-text class="py-2 px-4">
          <v-container class="pa-0">
            <v-row :align="entry.photos && entry.photos.length == 1 ? 'center' : null">
              <v-col :sm="(entry.photos && entry.photos.length == 1) ? 8 : 12">
                <div class="entry-title mb-3">{{ entry.title }}</div>
                <div class="entry-text" v-html="entry.text"></div>
              </v-col>

              <v-col v-if="entry.photos && entry.photos.length == 1" sm="4">
                <v-hover v-slot:default="{ hover }">
                  <v-img height="120px" :src="entry.photos[0].href" contain eager @click="showPhoto(entry.photos[0].href)">
                    <v-fade-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white v-card--reveal"
                        style="height: 100%; opacity: 0.5"
                      >
                      </div>
                    </v-fade-transition>
                  </v-img>
                </v-hover>
              </v-col>
            </v-row>

            <TimelinePhotoGallery v-if="entry.photos && entry.photos.length > 1" :photos="entry.photos" @showPhoto="showPhoto" />
          </v-container>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.timeline .entry-title {
  font-family: $sans-serif-font !important;
  font-size: 1.3rem;
  font-weight: 400;
  font-variant: small-caps;
  color: $wedding-blue;
}

.timeline-date {
  z-index: 2;
  padding: 5px;
  border-radius: 20px;

  display: table-cell;
  vertical-align: middle;

  background-color: $wedding-green;
  color: black;

  font-family: $sans-serif-font;
  text-transform: uppercase;
  font-size: 0.8rem;
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
  border-left: $path_width solid $wedding-blue;
  z-index: 1;
  height: 100%;
  top: 0;
}

.timeline-date-wrapper.timeline-first::after {
  border-image:
    linear-gradient(to bottom, rgba(43, 101, 149, 0), $wedding-blue 50%) 0 0 0 100%;
}

.timeline-date-wrapper.timeline-last {
  height: 120px;
}

.timeline-last .timeline-date {
  margin-top: -3em;
}

.timeline-date-wrapper.timeline-last::after {
  border-image:
    linear-gradient(to bottom, $wedding-blue 0% 50%, rgba(43, 101, 149, 0) 100%) 0 0 0 100%;
}

.timeline .v-image {
  cursor: pointer;
}

.timeline .entry-text {
  font-family: $sans-serif-font;
  font-size: 0.9rem;
}
</style>

<script>
import TimelineHighlightEntry from "./TimelineHighlightEntry";
import TimelinePhotoGallery from "./TimelinePhotoGallery";

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
    TimelineHighlightEntry,
    TimelinePhotoGallery
  },

  computed: {
    dateClasses() {
      let classes = [];

      if (this.entry.position === "middle") {
        classes.push("offset-4");
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
    }
  }
}
</script>
