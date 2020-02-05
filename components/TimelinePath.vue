<template>
  <v-row class="timeline-path">
    <!-- We will always need at least one vertical bar to connect to the last entry. -->
    <v-col 
      :class="xsClasses" 
      :cols="start.position === 'middle' ? 2 : 1"
      :offset="leftCornerOffset"
    >
      <div :class="leftCornerClasses"></div>
    </v-col>

    <v-col cols="1" :class="{
        'hidden-sm-and-up': true,
        'd-none': !this.neitherMiddle
      }"
    >
      <div class="vertical"></div>
    </v-col>

    <!-- If the entries we're connecting have different positions, we'll need a horizontal bar to connect them. -->
    <template v-if="start.position !== end.position">
      <v-col :cols="horizontalPathCols" :class="xsClasses"
      >
        <hr />
      </v-col>

      <!-- We'll also need a second vertical bar to connect to the next entry. -->
      <v-col :cols="end.position === 'middle' ? 2 : 1" :class="xsClasses">
        <div :class="rightCornerClasses"></div>
      </v-col>
    </template>
  </v-row>
</template>

<style lang="scss">
.timeline-path div {
  padding: 0;
  height: 40px;
  overflow: hidden;
}

.timeline-path hr {
  border-top: $path_width solid $wedding-blue;
  border-left: none;
  border-right: none;
  border-bottom: none;

  margin: 0;
  top: 20px - $path_width;
  position: relative;
  width: 100%;
}

.timeline-path .corner {
  border: $path_width solid $wedding-blue;
  width: 100%;
  position: relative;
  border-radius: 15px;
}

.timeline-path .bottom-left {
  left: calc(50% - 0.5 * #{$path_width});
  top: -50%;
}

.timeline-path .bottom-right {
  left: calc(-50% + 0.5 * #{$path_width});
  top: -50%;
}

.timeline-path .top-right {
  left: calc(-50% + 0.5 * #{$path_width});
  top: calc(50% - #{$path_width});
}


.timeline-path .top-left {
  left: calc(50% - #{0.5 * $path_width});
  top: calc(50% - #{$path_width});
}


.timeline-path .vertical {
  border-left: $path_width solid $wedding-blue;
  position: relative;
  left: calc(50% - 0.5 * #{$path_width});
}
</style>

<script>
export default {
  props: {
    start: Object,
    end: Object
  },

  computed: {
    neitherMiddle() {
      return this.start.position !== 'middle' && this.end.position != 'middle';
    },

    xsClasses() {
      return {
        'd-none': this.neitherMiddle,
        'd-sm-flex': this.neitherMiddle
      }
    },

    leftCornerOffset() {
      if (this.start.position === 'middle') {
        return 5;
      } else if (this.start.position === 'right' && this.end.position === 'right') {
        return 11;
      } else {
        return 0;
      }
    },

    horizontalPathCols() {
      if (this.start.position === "middle" || this.end.position === "middle") {
        return 4;
      } else {
        return 10;
      }
    },

    leftCornerClasses() {
      if (this.start.position === this.end.position) {
        return [ "vertical" ];
      }

      if (this.startLeftOfEnd) {
        return [ "corner", "bottom-left" ];
      } else {
        return [ "corner", "top-left" ];
      }
    },

    rightCornerClasses() {
      // This shouldn't happen since the right corner won't be rendered if the positions are the same.
      // But better to handle it than not.
      if (this.start.position === this.end.position) {
        return [ "vertical" ];
      }

      if (this.startLeftOfEnd) {
        return [ "corner", "top-right" ];
      } else {
        return [ "corner", "bottom-right" ];
      }
    },

    startLeftOfEnd() {
      if (this.start.position === "left") {
        return this.end.position !== "left";
      }

      if (this.start.position === "middle") {
        return this.end.position === "right";
      }

      return false;
    }
  }
}
</script>
