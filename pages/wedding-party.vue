<template>
  <div>
    <v-row
      v-for="member in party"
      :key="member.name"
    >
      <v-col sm="5" xs="12" :order="member.side === 'bride' ? 2 : 1">
        <v-hover v-if="member.photo" v-slot:default="{ hover }">
          <v-img
            :src="'/images/wedding-party/' + (hover ? member.altPhoto : member.photo)"
            height="400px"
            contain
          />
        </v-hover>
            
        <div v-else style="height: 400px; width: 400px; background-color: lightgrey">
          {{ member.name }}
        </div>
      </v-col>

      <v-col sm="7" xs="12" :order="member.side === 'bride' ? 1 : 2">
        <span class="party-name">{{ member.position }}: {{ member.name }}</span>
        <div v-html="member.intro" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    party: [{
      side: "bride",
      position: "Man of Honor",
      name: "Nick van Aartsen",
      intro: "He's a pretty cool guy."
    }, {
      side: "groom",
      position: "Best Woman",
      name: "Sabreen Lakhani",
      intro: "<p>Sabreen is my best man, despite not being, in fact, a man. That's just how awesome she is. Pro-tip: don’t attempt to interact with her before she has had her coffee.</p><p>We met in college, where she decided to adopt me and teach me to interact with humans. This was only moderately successful, as you all know, but she did her best. She also introduced me to spicy food. I cried. A lot.</p><p>Nowadays she lives in Seattle, which by some weird coincidence happens to be where I'm moving soon. In her free time, she takes pretty pictures (like my engagement photos), does crazy flips ’n shit, is the strongest woman in Washington (in her weight class), and gets a weird amount of joy out of finding dumb ways to lift other people.</p>",
      photo: "sabreen.jpg",
      altPhoto: "sabreen-silly.jpg"      
    }, {
      side: "bride",
      position: "Bridesmaid",
      name: "Taarika Babu",
      intro: "She's nice."
    }, {
      side: "groom",
      position: "Groomsman",
      name: "Chris Ferguson",
      intro: "He's cool."
    }, {
      side: "bride",
      position: "Bridesmaid",
      name: "Garima Batra",
      intro: "He's a pretty cool guy."
    }, {
      side: "groom",
      position: "Groomsman",
      name: "Kyle Irwin",
      intro: "<p>Hi, I’m Kyle.  Dan was one of my very first friends after moving to Maryland.  I met Dan at a game night where he patiently and succinctly explained the rules of a game called ‘Citadel’ to me.  We never played the game again apart from that one time, but it’s still a really really nice memory.  I was incredibly stoked when he started dating Christine, because her and I had both studied Dietetics in undergrad, and had a lot of feelings about it.  They’re both really rad.</p><p>I enjoy climbing, Nintendo, drinking tea, and baking.</p>",
      photo: "kyle.jpg",
      altPhoto: "kyle-milk.jpg"
    }, {
      side: "bride",
      position: "Bridesmaid",
      name: "Michelle Katz",
      intro: "<p>Christine and Michelle met waaaaay back in high school. Their friendship started in choir class, then grew while eating lunch together, rehearsing in school musicals, and just generally hanging out. Michelle really values all of her good times with Christine after high school too — cooking experiments, hot pot, and most especially girls’ nights in!</p><p>Michelle is super excited for Christine to marry Dan and can’t wait to celebrate them on their big day!</p>",
      photo: "michelle.jpg",
      altPhoto: "michelle-silly.jpg"
    }, {
      side: "groom",
      position: "Groomsman",
      name: "Taylor Parsons",
      intro: "Sabreen is so cool that she's my Best Man despite not, in fact, being a man.",
      photo: "taylor.jpg",
      altPhoto: "taylor-silly.jpg"
    }, {
      side: "bride",
      position: "Bridesmaid",
      name: "Priscilla Tang",
      intro: "In 2007, Christine and I met and quickly bonded over our love for the film My Neighbor Totoro and playing Bomberman (she totally kicked my butt). Over the years, we have had so many amazing and silly adventures together from making kimchi/pizza/ice cream from scratch, having an impromptu painting afternoon, apple picking/rolling around in the hay, to throwing dry paint at each other at Holi. When I'm feeling down, Christine is always right by my side with a shoulder to cry on, comfort food (chocolates and bubble tea), and words of wisdom, support, and love. She has a unique gift of making the good times better and the hard times easier. Christine brings sunshine, happiness, and positivity to anyone who is lucky enough to be her friend and my heart is brimming with joy that she found her soulmate, her partner in crime, her ForeverMoore. Congratulations to Christine and Dan and may you bring each other as much happiness as your friendship has brought me!",
      photo: "priscilla.jpg",
      altPhoto: "priscilla-silly.jpg"
    }, {
      side: "groom",
      position: "Groomsman",
      name: "Matt Vermillion",
      intro: "Sabreen is so cool that she's my Best Man despite not, in fact, being a man."
    }, {
      side: "bride",
      position: "Bridesmaid",
      name: "Mia Tang-Huang",
      intro: "He's a pretty cool guy."
    }]
  })
}
</script>