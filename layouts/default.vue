<template>
  <v-app light>
    <v-app-bar elevate-on-scroll fixed app>
      <div class="app-title mx-auto">
        Daniel &amp; Christine
      </div>

      <div class="d-md-none menu-button">
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.label"
              :to="link.to"
            >
              <v-list-tile-title>{{ link.label }}</v-list-tile-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <template v-slot:extension>
        <div class="hidden-sm-and-down mx-auto mt-2">
          <template v-for="link in links">
            <v-tooltip bottom v-if="link.soon" :key="link.label">
              <template v-slot:activator="{ on }">
                <v-btn 
                  :key="link.label"
                  text
                  tile
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
              nuxt
              :href="link.to"
              class="nav-item"
            >
            {{ link.label }} 
            </v-btn>
          </template>
        </div>
      </template>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">
.app-title {
  font-family: $script-font-family;
  color: $wedding-blue;
  letter-spacing: 1.5px;
  padding-top: 10px;
  margin-bottom: -1rem;
}

.nav-item {
  font-family: $serif-font-family;
  text-transform: uppercase;
  font-size: 0.6rem;

  &.coming-soon {
    color: rgba(0, 0, 0, 0.26) !important;
  }
}

.menu-button {
  position: fixed;
}

@media (min-width: 960px) {
  .app-title {
    font-size: 50pt;
  }
}

@media (max-width: 959px) {
  .app-title {
    font-size: 30pt;
  }
}

@font-face {
  font-family: "Savoye LET";
  src: url("//db.onlinewebfonts.com/t/005369b1bccd49c6f752348e3261eec3.eot");
  src: url("//db.onlinewebfonts.com/t/005369b1bccd49c6f752348e3261eec3.eot?#iefix") format("embedded-opentype"),
       url("//db.onlinewebfonts.com/t/005369b1bccd49c6f752348e3261eec3.woff2") format("woff2"),
       url("//db.onlinewebfonts.com/t/005369b1bccd49c6f752348e3261eec3.woff") format("woff"),
       url("//db.onlinewebfonts.com/t/005369b1bccd49c6f752348e3261eec3.ttf") format("truetype"),
       url("//db.onlinewebfonts.com/t/005369b1bccd49c6f752348e3261eec3.svg#Savoye LET") format("svg");
}
</style>

<script>
export default {
  data () {
    return {
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
        to: "/rsvp",
        soon: true
      }, {
        label: "Registry",
        to: "/registry",
        soon: true
      }]
    }
  }
}
</script>
