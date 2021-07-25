<template>
  <Timeline :entries="timeline" />
</template>

<script>
import Timeline from "../components/Timeline";

export default {
  components: {
    Timeline
  },

  head: () => ({
    title: "Our Story"
  }),

  data: () => ({
    timeline: [{
      date: "Apr 2017",
      title: "First Sight",
      text: "<p>We met at a dinner party hosted by a mutual friend (hi, Pat!). Dan knew him through rock climbing; Christine had lived in the same house in college.</p><p>We had a very nice dinner before going to the Gymkana home show; for both, we each subtly tried to make sure we were sitting next to each other.</p>",
      position: "left"
    }, {
      date: "Jun 2017",
      title: "First Dates",
      text: "<p>Our first dates! Rock climbing, naturally.</p><p>Dan didn't realize these were actually dates until after the third one.</p><p>This guy...</p>",
      position: "right",
      photos: [
        { href: "/images/timeline/first-message.jpg" }
      ]
    }, {
      date: "Jul 2017",
      title: "First (Formal) Date",
      text: "Dan finally caught on that we were dating, and actually asked Christine out!<br />We ate delicious dumplings, got bubble tea, and went to a game night with Christine's friends.<br />Everyone sang 'Happy Birthday' for Dan, who was extremely embarrassed.",
      position: "left",
      photos: [
        { href: "/images/timeline/first-date-jenga.jpg" },
        { href: "/images/timeline/cupcakes.jpg" },
      ]
    }, {
      date: "Summer 2017",
      title: "The Adventure Begins",
      text: "<p>Dan lived in Columbia, while Christine was in downtown D.C., so getting time together could be hard.</p><p>But we did our best to see each other every weekend, going hiking, apple-picking, rock climbing, roller-skating, and doing many other activities together.",
      position: "right",
      photos: [
        { href: "/images/timeline/ice-cream.jpg" },
        { href: "/images/timeline/fair-happy.jpg" },
        { href: "/images/timeline/fair-unhappy.jpg" },
        { href: "/images/timeline/deep-water-solo.jpg" },
        { href: "/images/timeline/hiking.jpg" },
        { href: "/images/timeline/apple-picking.jpg" }
      ]
    }, {
      date: "Aug 2017",
      title: "\"I love you\"",
      text: '<p>We were talking on the phone.</p><p>Christine said, "I love food!"<br />Dan misheard, and responded, "I love you, too."</p><p>It was awkward, but it wasn\'t wrong.</p>',
      position: "left",
      photos: [
        { href: "/images/timeline/christine-loves-food.jpg" }
      ]
    }, {
      date: "Nov 2017",
      title: "First Trip Together!",
      text: 'We went on our very first big trip together to Seattle! We <a href="/fellowship-of-the-ring">visited Sabreen</a>, had circus adventures, and weren\'t driven apart by the stresses of travelling! This boded well.',
      position: "right",
      photos: [
        { href: "/images/timeline/seattle-0.jpg" },
        { href: "/images/timeline/seattle-1.jpg" },
        { href: "/images/timeline/seattle-2.jpg" }
      ]
    }, {
      date: "Spring 2018",
      title: "The Continued Adventures of Muffin and Potato",
      text: "We assigned each other nicknames based on our favorite foods (doesn't everyone?). Christine introduced Dan to her love of circus arts, and he managed to pass the all-important Dog Approval Test&trade;.",
      position: "left",
      photos: [
        { href: "/images/timeline/ornament.jpg" },
        { href: "/images/timeline/luzia.jpg" },
        { href: "/images/timeline/meet-the-dogs.jpg" },
      ]
    }, {
      date: "May 2018",
      title: "Buying a Couch",
      text: "<p>By this point Christine was sick and tired of the drive between D.C. and Columbia. We decided the best option was to move in together -- either things would work out wonderfully, or we'd learn that we weren't ready to share space like that.</p><p><em>(Spoiler: it was the first one.)</em></p><p>As part of this endeavour, it was time for Dan to buy his first piece of actual furniture.</p>",
      position: "right",
      photos: [
        { href: "/images/timeline/moving.jpg" },
        { href: "/images/timeline/empty-apartment.jpg" },
        { href: "/images/timeline/ikea-shopping.jpg" },
        { href: "/images/timeline/the-couch.jpg" },
      ]
    }, {
      date: "Jan 2019",
      title: "Dan Meets The Family",
      text: "<p>The bulk of Christine's family lives in Taiwan and we figured Dan should actually meet them at some point. So we carefully planned a trip for mid-winter so he didn't melt in the tropical heat.</p><p>It was incredible and beautiful and delicious, and so much fun that we went back in December.</p><p>Christine's family was nice, too.</p>",
      position: "left",
      photos: [
        { href: "/images/timeline/taiwan-taroko.jpg" },
        { href: "/images/timeline/taiwan-beach.jpg" },
        { href: "/images/timeline/taiwan-hike.jpg" },
        { href: "/images/timeline/taiwan-taroko-3.jpg" },
        { href: "/images/timeline/taiwan-bento.jpg" },
        { href: "/images/timeline/taiwan-dtf.jpg" },
      ]
    }, {
      date: "Feb 2019",
      title: "Dan Starts Planning",
      text: "<p>By this point, Dan was pretty sure that Christine was The One. So he started planning how he was going to ask her. Where? How? And, of course, with what ring?</p><p>He found the perfect ring, but before he could do anything more, disaster struck.</p>",
      position: "right",
      photos: [
        { href: "/images/timeline/ring.jpg" },
      ]
    }, {
      date: "The Next Week",
      title: "Disaster Strikes!",
      text: "<p>During a routine trip to the local Ninja Warrior gym, Christine got tripped by a safety mat and broke her ankle. Thus commenced six months of recovery time that stressed our relationship like nothing else has.</p><p>Christine couldn't walk, drive, cook, see friends, or do any of her usual activities without a lot of help, so Dan took care of her as best he could.</p><p>It was really, really hard, but we got through it together, and with some help from friends and family, and in the end we were closer than ever.</p>",
      position: "right",
      photos: [
        { href: "/images/timeline/broken-ankle.jpg" },
        { href: "/images/timeline/pre-surgery.jpg" },
      ]
    }, {
      date: "Sept 2019",
      title: "A Triumphant Return",
      text: "<p>Just before Christine broke her ankle, we had signed up for a Tough Mudder race in the area. The typical recovery time for Christine's injury was about seven months, and as luck would have it, there was a Tough Mudder schedule for seven-and-a-half months later in Seattle.</p><p>So, we switched to that race, bought airplane tickets, alerted our friends in the area, and voilà! We had something to look forward to, and to help motivate us to keep going.</p><p>Of course, Dan had some <em>extra</em> plans as well...</p>",
      position: "left"
    }, {
      anchor: "proposal",
      date: "Sept 21, 2019",
      title: "The Proposal",
      position: "middle",
      type: "highlight",
      which: "proposal",
      mainImage: "/images/timeline/proposal.jpg"
    }, {
      date: "June 2020",
      title: "Moving to Seattle!",
      text: "<p>Christine was accepted to business school at the University of Washington, so we were off to the West Coast! After a few months of quarantine we were more than ready to pick up and spend some time somewhere new, so in the frenzied two weeks while Dan was between jobs, we moved all the way across the country!</p>",
      position: "left",
      photos: [
        { href: "/images/timeline/moving-boxes.jpg" },
        { href: "/images/timeline/moving-cars.jpg" },
        { href: "/images/timeline/moving-empty.jpg" },
        { href: "/images/timeline/moving-plane.jpg" }
      ]
    }, {
      anchor: "elopement",
      date: "August 2, 2020",
      title: "So It Begins...",
      position: "middle",
      type: "highlight",
      which: "elopement",
      mainImage: "/images/timeline/elopement-running.jpg",
      photos: [
        { href: "/images/timeline/elopement-twisty.jpg" },
        { href: "/images/timeline/elopement-dan.jpg" },
        { href: "/images/timeline/elopement-lift.jpg" },
        { href: "/images/timeline/elopement-floof.jpg" },
        { href: "/images/timeline/elopement-spin.jpg" },
        { href: "/images/timeline/elopement-sitting.jpg" },
        { href: "/images/timeline/elopement-group.jpg" },
        { href: "/images/timeline/elopement-rings.jpg" },
      ]
    }, {
      anchor: "engagement-shoot",
      date: "July 2021",
      title: "Engagement Shoot",
      position: "middle",
      type: "highlight",
      which: "engagement-shoot",
      mainImage: "/images/timeline/engagement-sunset.jpg",
      photos: [
        { href: "/images/timeline/engagement-column-kiss.jpg" },
        { href: "/images/timeline/engagement-casual-hug.jpg" },
        { href: "/images/timeline/engagement-casual-kiss.jpg" },
        { href: "/images/timeline/engagement-not-a-pregnancy-announcement.jpg" },
        { href: "/images/timeline/engagement-lift.jpg" },
        { href: "/images/timeline/engagement-formal-sitting.jpg" },
        { href: "/images/timeline/engagement-fan.jpg" },
        { href: "/images/timeline/engagement-hyena.jpg" },
        { href: "/images/timeline/engagement-formal-walking.jpg" },
        { href: "/images/timeline/engagement-chipotle.jpg" },
      ]
    }, {
      date: "To be continued...",
      position: "middle",
      type: "stub"
    }]
  })
}
</script>