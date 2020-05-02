<template>
  <div>
    <v-row align="center">
      <v-col cols="12" sm="6" class="text-center">
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

      <v-col cols="12" sm="6">
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

      <v-col cols="12" sm="6" offset-sm="1">
        <div class="travel-header text-center my-2">Hotels</div>
        <p>
          We have set up a hotel block with the <a href="https://www.clarioninnleesburg.com/">Clarion Hotel Leesburg</a> (&#9733;&#9733;&#9733;). It is a five-minute drive from the wedding venue, and has a complimentary airport shuttle. 
        </p>
        <p>
          <a href="https://www.lansdowneresort.com/">Lansdowne Resort and Spa</a> (&#9733;&#9733;&#9733;&#9733;) is a more luxurious option. After requesting a hotel block, we concluded that internet bookings are the best way to get a competitive rate!
        </p>
        <p>
          Other options for discounted rates <a href="https://www.hotelplanner.com/15014156/EventPage5841953">are available here</a>. There are also some cute options on <a href="https://www.airbnb.com/s/Leesburg--VA--United-States/homes?tab_id=all_tab&refinement_paths%5B%5D=%2Fhomes&query=Leesburg%2C%20VA&place_id=ChIJuzk71YM9tokR873541YPkrE&checkin=2020-08-01&checkout=2020-08-03&adults=2">AirBnB</a> (but book soon, these seem to disappear quickly).
        </p>
      </v-col>
    </v-row>


    <v-row class="mt-5">
      <v-col order="1" order-sm="0" cols="12" sm="6">
        <v-img src="/images/wedding-logo.png" height="200px" contain/>
      </v-col>

      <v-col order="0" order-sm="1" cols="12" sm="6">
        <div class="travel-header text-center mb-2">FAQ</div>
        children?
        <p>
          In order to allow all guests, including parents, an evening of relaxation, we have chosen for our wedding day to be an adults-only occasion.
        </p>
        dress code?
        <p>
          pants
        </p>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
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