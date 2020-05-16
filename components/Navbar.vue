<template>
  <v-sheet tag="header" class="navbar" elevation="1">
    <v-container fluid class="py-0">
      <v-row align="center" no-gutters>
        <v-col cols="1" class="d-sm-none">
          <v-menu>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="link in links"
                :key="link.label"
                :to="link.to"
                :disabled="link.soon"
              >
                <v-list-item-title>{{ link.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col cols="10" offset-sm="1" class="app-title text-center">
          Daniel <span style="font-size: 0.7em">&amp;</span> Christine
        </v-col>
      </v-row>

      <v-row class="hidden-xs-only pb-0 justify-center nav-item-row">
        <template v-for="link in links">
          <div :key="link.label" class="pb-0">
            <v-tooltip bottom v-if="link.soon" >
              <template v-slot:activator="{ on }">
                <v-btn 
                  :key="link.label"
                  text
                  tile
                  block
                  class="nav-item coming-soon"
                  v-on="on"
                >
                {{ link.label }} 
                </v-btn>
              </template>
                <span>Coming soon!</span>
            </v-tooltip>

            <v-btn 
              v-else
              :key="link.label"
              text
              tile
              block
              nuxt
              :href="link.to"
              class="nav-item"
            >
            {{ link.label }} 
            </v-btn>
          </div>
        </template>
      </v-row>

      <v-row v-if="showCovidWarning" class="covid-warning mt-1">
        <div style="width: calc(100% - 84px)" class="d-inline-block my-3 ml-5"> 
          COVID-19 certainly complicates things, but we are doing everything we can to ensure our wedding will be safe and comfortable for everyone. We still hope to celebrate on August 2nd, but will update you if anything changes.
        </div>

        <v-btn text v-on:click="hideCovidWarning" height="auto" width="40px" class="d-inline-block">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-sheet>
</template>


<style lang="scss">
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;

  background-image: url("/images/header.png");
  background-size: cover;
}

.app-title {
  font-family: $script-font-family;
  color: $wedding-blue;
  letter-spacing: 1.5px;
  padding-top: 6px !important;
  margin-bottom: -10px;
}

.nav-item {
  font-family: $serif-font-family;
  text-transform: uppercase;
  font-size: 0.6rem;

  &.coming-soon {
    color: rgba(0, 0, 0, 0.26) !important;
  }
}

.nav-item-row {
  margin-top: -12px;
}

.menu-button {
  position: fixed;
}

.covid-warning {
  background-color: #f0cf759f;
}

@media (min-width: 600px) {
  .app-title {
    font-size: 40pt;
  }
}

@media (max-width: 599px) {
  .app-title {
    font-size: 28pt;
  }
}
</style>


<script>
export default {
  data () {
    return {
      showCovidWarning: true,

      links: [{
        label: "Home",
        to: "/"
      }, {
        label: "Our Story",
        to: "/story"
      }, {
        label: "Wedding Party",
        to: "/fellowship-of-the-ring"
      }, {
        label: "Logistics",
        to: "/logistics"
      }, {
        label: "RSVP",
        to: "/rsvp"
      }, {
        label: "Registry",
        to: "/registry"
      }]
    }
  },

  methods: {
    hideCovidWarning() {
      this.showCovidWarning = false;
      localStorage.covidWarningDismissed = Date.now();
    }
  },

  mounted() {
    if (localStorage.covidWarningDismissed) {
      const timestamp = Number.parseInt(localStorage.covidWarningDismissed);
      const dismissed = new Date(timestamp);

      // Show the warning again after an hour.
      if (Date.now() - dismissed > 1000 * 60 * 60) {
        this.showCovidWarning = true;
      } else {
        this.showCovidWarning = false;
      }
    } else {
      this.showCovidWarning = true;
    }
  }
}
</script>