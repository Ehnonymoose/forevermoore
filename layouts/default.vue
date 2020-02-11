<template>
  <v-app light>
    <Navbar />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
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
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
}
</script>
