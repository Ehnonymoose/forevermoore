<template>
  <div>
    <v-row align="center">
      <v-col md="6" class="text-center">
        <div class="travel-header text-center mb-2">Venue</div>
        <p>
          Raspberry Plain Manor<br/>
          16500 Agape Lane<br />
          Leesburg, VA 20176
        </p>
        <div style="height: 20px"></div>
        <p>
          August 2nd, 2020<br />
          Ceremony: 5:00 PM<br />
          Reception: 6:00 PM
        </p>
      </v-col>

      <v-col md="6">
        <div class="map-frame">
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.6766346767645!2d-77.55052548470691!3d39.1593358795312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b622baee01a4bb%3A0xa0870bccbae41ab6!2sRaspberry%20Plain%20Manor!5e0!3m2!1sen!2sus!4v1579230960293!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col cols="12" sm="4" offset-sm="1">
        <div class="travel-header text-center mb-2">Flying</div>
        <p>
          There are three major airports in the D.C. area:
          <ul>
            <li>Dulles (IAD): about a 30-minute drive away</li>
            <li>Reagan (DCA): about a 60-minute drive away</li>
            <li>Baltimore (BWI): about a 90-minute drive away</li>
          </ul>
        </p>
        <p>
          Unfortunately, there isn't really any public transit system in Leesburg, so Uber or a rental car will likely be necessary to get to the venue.
        </p>
      </v-col>

      <v-col cols="12" sm="4" offset-sm="2">
        <div class="travel-header text-center my-2">Hotels</div>
        <div>
          We are working on setting up hotel blocks. Check back soon!
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
.travel-header {
  color: $wedding-blue;
  font-weight: 400;
  font-size: 1.3rem;

  font-variant: small-caps;
}

.map-frame {
  display: block;
  box-sizing: border-box;
  width: 100;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  border-width: 8px;
  border-style: solid;
  border-color: white;
  border-image: initial;
}

.map-container {
  position: relative;
  height: 400px;

}
</style>

<script>
export default {
  head: () => ({
    title: "Where to Be"
  })
}
</script>