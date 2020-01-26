<template>
  <v-row align="center">
    <v-col md="6" class="text-center">
      <p>
        Raspberry Plain Manor<br/>
        16500 Agape Lane<br />
        Leesburg, VA 20176
      </p>
      <div style="height: 20px"></div>
      <p>
        August 2, 2020<br />
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
</template>

<style>
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