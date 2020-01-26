<template>
  <v-row class="timeline-path">
    <!-- We will always need at least one vertical bar to connect to the last entry. -->
    <v-col 
      class="d-none d-sm-flex" 
      :cols="start.position === 'middle' ? 2 : 1"
      :offset-sm="leftCornerOffset"
    >
      <div :class="leftCornerClasses"></div>
    </v-col>

    <v-col cols="1" class="hidden-sm-and-up">
      <div class="vertical"></div>
    </v-col>

    <!-- If the entries we're connecting have different positions, we'll need a horizontal bar to connect them. -->
    <template v-if="start.position !== end.position">
      <v-col :cols="horizontalPathCols" class="d-none d-sm-flex">
        <hr />
      </v-col>

      <!-- We'll also need a second vertical bar to connect to the next entry. -->
      <v-col :cols="end.position === 'middle' ? 2 : 1" class="d-none d-sm-flex">
        <div :class="rightCornerClasses"></div>
      </v-col>
    </template>
  </v-row>
</template>

<style>
.timeline-path div {
  padding: 0;
  height: 40px;
  overflow: hidden;
}

.timeline-path hr {
  border-top: 3px solid #2B6595;
  border-left: none;
  border-right: none;
  border-bottom: none;

  margin: 0;
  top: 17px;
  position: relative;

  /* Make the rule a little longer so there aren't gaps */
  width: calc(100% + 5px);
}

.timeline-path .corner {
  border: 3px solid #2B6595;
  width: 100%;
  position: relative;
  border-radius: 15px;
}

.timeline-path .bottom-left {
  left: calc(50% - 1.5px);
  top: -50%;
}

.timeline-path .bottom-right {
  left: calc(-50% + 1.5px);
  top: -50%;
}

.timeline-path .top-right {
  left: calc(-50% + 1.5px);
  top: calc(50% - 3px);
}


.timeline-path .top-left {
  left: calc(50% - 1.5px);
  top: calc(50% - 3px);
}


.timeline-path .vertical {
  border-left: 3px solid #2B6595;
  position: relative;
  left: calc(50% - 1.5px);
}
</style>

<script>
export default {
  props: {
    start: Object,
    end: Object
  },

  computed: {
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
