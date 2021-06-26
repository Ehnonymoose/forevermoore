<template>
  <div>
    <v-row>
      <v-col cols="12" sm="10" offset-sm="1" class="text-center">
        <div class="travel-header text-center mb-2" style="font-size: 2rem">Where and When</div>

        <v-img :src="require('static/images/RPM profile photo.png')" :height="400" class="mt-4"></v-img>

        <div class="mt-4 subtitle-1">
          <a href="https://www.google.com/maps/dir//Raspberry+Plain+Manor,+Agape+Lane,+Leesburg,+VA" style="text-decoration: none; color: black">
            <b>Raspberry Plain Manor</b><br>
            16500 Agape Lane, Leesburg, VA 20176
          </a><br>

          September 12th, 2021 | 5:00 PM
        </div>
        
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col cols="12" sm="6"  order="1" order-sm="0" class="text-center">
        <div class="travel-header mb-2">Flying</div>
        
        <p>There are three major airports in the D.C. area:</p>
        <p>
          <b>Dulles (IAD)</b>: about a 30-minute drive away<br>
          <b>Reagan (DCA)</b>: about a 60-minute drive away<br>
          <b>Baltimore (BWI)</b>: about a 90-minute drive away
        </p>
        
        <div style="height: 24px"></div>

        <div class="travel-header mb-2 mt-5" style="margin-top:">FAQ</div>
        <p>
          <b>May children attend?</b><br>
          <p>
            While we love your kids, in order to allow everyone, including parents, an evening of relaxation, we have chosen for our wedding day to be adults only.
          </p>
        </p>
        <br>
        <p>
          <b>What’s the dress code?</b><br>
          <p>
            We’re not the most formal people, and we’re certainly not about to inflict white- or black-tie attire on people in Virginia in September!
          </p>
          <p>
            That said, please do wear pants (or dresses).
          </p>
          </span>
        </p>
      </v-col>


      <v-col cols="12" sm="6" order="0" order-sm="1">
        <div class="travel-header text-center mb-2">Hotels</div>
        <div class="text-center">
          <b>Doubletree of Sterling, VA</b><br>

          We have set up a room block under the name: Huang-Moore Wedding.<br>
          You can <a href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=IADSLDT&groupCode=CDTHMW&arrivaldate=2021-09-11&departuredate=2021-09-13&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT">book online</a> or call <a href="tel:+17032300077">(703) 230-0077</a> to reserve your room.<br>
          Please book <b>before August 22</b>. A free shuttle from Dulles is available!
        </div>

        <div class="text-center mt-5">
          <b>Leesburg hotels</b><br>
          There are many nice hotels in Leesburg. After requesting hotel blocks at several, we concluded that internet bookings are the best way to get competitive rates.<br>
          Book soon to get discounted rates <a href="https://www.hotelplanner.com/02345288/EventPage6427188">through our portal</a>!
        </div>

        <div class="text-center mt-5">
          <div class="d-inline-flex align-center" style="margin-bottom: 10px"><b>Airbnb</b>&nbsp;-&nbsp;<img src="/images/airbnb.svg" height="24px"></img></div><br>
          <a href="https://www.airbnb.com/s/Leesburg--VA/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&adults=2&flexible_trip_dates%5B%5D=august&flexible_trip_dates%5B%5D=july&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&ne_lat=39.1945414654192&ne_lng=-77.56901107072963&sw_lat=39.01390995055963&sw_lng=-77.65298781843057&zoom=13&search_by_map=true&search_type=filter_change&place_id=ChIJuzk71YM9tokR873541YPkrE&checkin=2021-09-11&checkout=2021-09-13&source=structured_search_input_header">Airbnb</a> also has cute options (but book early - these will disappear quickly!).
        </div>
        
        <div class="d-none d-sm-flex" style="height: 150px"></div>
        <v-img class="d-none d-sm-flex" src="/images/wedding-logo.png" height="200px" contain/>
      </v-col>
    </v-row>

    <v-row class="mt-5 d-sm-none">
      <v-col cols="12">
        <v-img src="/images/wedding-logo.png" height="200px" contain/>
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

ul.hotel-links {
  list-style-position: inside;
}
</style>

<script>
export default {
  head: () => ({
    title: "Where to Be"
  })
}
</script>