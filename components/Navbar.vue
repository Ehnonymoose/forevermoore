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

      <v-expand-transition>
        <v-row v-if="showCovidWarning" class="covid-warning mt-1">
          <v-col cols="12" sm="10" offset-sm="1" align="center" class="py-1">
            The COVID-19 pandemic has made planning ahead difficult, but it seems likely that things will have calmed down by August, so we're still planning on holding the wedding on August 2. Hope to see you then!
          </v-col>
          <v-spacer />
          <v-btn text v-on:click="hideCovidWarning" height="auto">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
      </v-expand-transition>
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
      localStorage.showCovidWarning = false;
    }
  },

  mounted() {
    // localStorage stores things as strings, so we don't need to worry about this being the boolean value `false`.
    if (localStorage.showCovidWarning) {
      this.showCovidWarning = (localStorage.showCovidWarning == "true");
    } else {
      this.showCovidWarning = true;
    }
  }
}
</script>