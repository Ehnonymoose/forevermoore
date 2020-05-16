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

          August 2nd, 2020 | 5:00 PM
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
            We’re not the most formal people, and we’re certainly not about to inflict white- or black-tie attire on people in Virginia in August!
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
          <b>Clarion Hotel Leesburg</b> - &#9733;&#9733;&#9733;<br><br>
          We have set up a room block under the name: Huang-Moore Wedding.<br>
          Please <a href="https://www.choicehotels.com/reservations/groups/ca21c6">book online</a> or call <a href="tel:+17037719200">(703) 771-9200</a> to reserve your room.<br><br>
          The hotel is 5 minutes from our venue, offers a complimentary airport shuttle*, and you can also arrange a complimentary ride to the venue via the front desk.<br>
          <span class="caption mt-2">*all shuttle services will be contingent upon social distancing restrictions</span>
        </div>

        <div class="text-center mt-5">
          <b>Lansdowne Resort and Spa</b> - &#9733;&#9733;&#9733;&#9733;<br><br>
          A bit further afield (20 minutes from the venue) Lansdowne is an idyllic getaway for those looking to escape the bustle of downtown Leesburg.<br><br>
          After requesting a hotel block, we concluded that <a href="https://www.lansdowneresort.com/">internet bookings</a> are the best way to get a competitive rate!
        </div>

        <div class="text-center mt-5">
          <div class="d-inline-flex align-center" style="margin-bottom: 10px"><b>Airbnb</b>&nbsp;-&nbsp;<img src="images/airbnb.svg" height="24px"></img></div><br>
          There are also some cute options on <a href="https://www.airbnb.com/s/Leesburg--VA--United-States/homes?tab_id=all_tab&refinement_paths%5B%5D=%2Fhomes&query=Leesburg%2C%20VA&place_id=ChIJuzk71YM9tokR873541YPkrE&checkin=2020-08-01&checkout=2020-08-03&adults=2">AirBnB</a> (but book soon, these seem to disappear quickly).
        </div>
      </v-col>
    </v-row>


    <v-row class="mt-5">
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
</style>

<script>
export default {
  head: () => ({
    title: "Where to Be"
  })
}
</script>