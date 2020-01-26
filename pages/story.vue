<template>
  <Timeline :entries="timeline" />
</template>

<script>
import Timeline from "../components/Timeline";

export default {
  components: {
    Timeline
  },

  data: () => ({
    timeline: [{
      date: "April 2017",
      title: "First Sight",
      text: "We met at a dinner party hosted by a mutual friend. Dan knew him through rock climbing; Christine had lived in the same house in college.",
      position: "left",
      photos: [
        { src: "/images/timeline/taipei101-night.jpg", caption: "We are mature, responsible adults." }
      ]
    }, {
      date: "May 2017",
      title: "First Dates",
      text: "Our first dates! Rock climbing, naturally.<br />Dan didn't realize these were actually dates. He is dumb.",
      position: "right",
      photos: [
        { src: "/images/timeline/brookside-gardens.jpg" }
      ]
    }, {
      date: "July 2017",
      title: "First Formal Date",
      text: "Dan finally caught on that we were dating, and actually asked Christine out.<br />We ate delicious dumplins, then went to a game night with Christine's friends.<br />Everyone sang 'Happy Birthday' for Dan, who was extremely embarrassed.",
      position: "left",
      photos: [
        { src: "/images/timeline/cupcakes.jpg" },
        { src: "/images/timeline/silly-beach.jpg" }
      ]
    }, {
      date: "Sept 2019",
      title: "The Proposal",
      text: "It's a thing! It happened!",
      position: "middle",
      type: "proposal"
    }, {
      date: "To be continued...",
      position: "middle"
    }]
  })
}
</script>