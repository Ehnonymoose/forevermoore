<template>
  <div>
    <v-row
      v-for="member in party"
      :key="member.name"
      align="center"
      class="party-member"
    >
      <v-col sm="5" cols="12" :order-sm="member.side === 'bride' ? 1 : 0">
        <v-hover v-slot:default="{ hover }">
          <v-img
            :src="require(`static/images/wedding-party/${ hover ? member.altPhoto : member.photo }?vuetify-preload`)"
            height="300px"
            contain
          />
        </v-hover>
      </v-col>

      <v-col sm="7" cols="12" :order-sm="member.side === 'bride' ? 0 : 1">
        <div class="party-name">{{ member.position }}: {{ member.name }}</div>
        <div v-html="member.intro" />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col>
        <v-img src="/images/wedding-logo.png" height="200px" contain/>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
.party-name {
  font-family: $serif-font-family;
  color: $wedding-blue;
  font-variant: small-caps;
  font-size: 1.5rem;
  font-weight: 400;
}

.party-member {
  min-height: 360px;
}
</style>

<script>
export default {
  head() {
    return {
      title: "Our Favorite Folks"
    }
  },

  data: () => ({
    party: [{
      side: "bride",
      position: "Man of Honor",
      name: "Nick van Aartsen",
      intro: "<p>Originally just in it for the homemade muffins and beignets, Nick soon realized Christine was an amazing friend as well. At first they bonded over rock climbing, but Christine kept things more interesting and was soon showing him flying trapeze and even a pole dance move or two. Nick would do his best to keep up through all of this.</p><p>On more restful days, the two have enjoyed a particular love for ice creams, cajun food, and board game nights. On slightly less restful days they have also enjoyed scenic hiking routes, including a sunrise trek up old rag. Later, Christine would bring Nick to Mexico to visit their friend Garima and tour ancient pyramids. He was also introduced to Hot Nuts® and micheladas, a transformational experience.</p><p>Nick is incredibly excited for Christine and Dan, and looking forward to visiting them in Seattle.</p>",
      photo: "nick.jpg",
      altPhoto: "nick-silly.jpg"
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
      intro: "My favorite memory of Christine is when I realized that we were going to be lifelong friends! I was a huge anime nerd in high school but had to build up the courage to join the anime club because I didn’t want to be judged. About a month into my freshman year I finally built up the courage to go to a meeting. Christine was one of the first people I saw when I walked in the room. We had a few classes together but hadn’t really talked much outside of pleasantries. Seeing her there instantly put me at ease because I thought she was completely normal (big mistake :P) so I sat next to her and we finally started talking. We became friends pretty much instantly after that anime club meeting and it’s now 15 years later and I can’t believe that I am going to be there to watch her get married 😊",
      photo: "taarika.jpg",
      altPhoto: "taarika-silly.jpg"
    }, {
      side: "groom",
      position: "Groomsman",
      name: "Chris Ferguson",
      intro: "<p>A dread chthonic beast cunningly disguised as an irrepressibly-cheerful, kindhearted dude, Chris first showed his lack of good judgment by agreeing to be my roommate for our sophomore and junior years in college. Somehow we came out of that experience still friends, and have even managed to stay more-or-less in touch in the years since!</p><p>He\'s the one who introduced me to Magic (so, uh, thanks?), along with Euchre, Dominion, and more other games than I can count. Chris is also the my go-to source of recommendations for books, music, and TV, as well as a font of neat obscure facts and awful jokes. Despite his true nature, he\'s a swell guy.</p>",
      photo: "chris.jpg",
      altPhoto: "chris-silly.jpg"
    }, {
      side: "bride",
      position: "Bridesmaid",
      name: "Garima Batra",
      intro: "<p>Garima and Christine met serendiptiously through their common friend Michelle who thought they'd be the best first climbing partners together. From the first class onwards, it was obvious that their crazy was compatible. The belationship took some twists and turns (see what I did there?) and had to keep up with Garima's travels and eventual move to Mexico - but Christine followed en suite! This global friendship has been an amazing one for both and Garima can't WAIT to see Dan and Christine tie the knot in August!</p>",
      photo: "garima.jpg",
      altPhoto: "garima-silly.jpg"
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
      intro: "<p>The first time I really hung out with Taylor, we went to a ninja warrior gym, so things definitely got off on the right foot. We've been on trips together to at least nine different states, for climbing, snowboarding, roller coasters, family, and climbing (again). Someday we'll go snowboarding again. 😛</p><p>There have been some weird coincidences connecting us. My parents randomly moved from eastern WA all the way to NC, and ended up across the street from the house he grew up in. Then it turns out that Christine has been a good friend of his now-wife Sharon for a good 20+ years. When we move to Seattle we'll probably end up next door to his cousin or something.</p><p>He is now a professional soap salesman, and is <em>definitely</em> not an alias of Tyler Durden.</p>",
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
      intro: "<p>When I first moved to Maryland, I didn't  know anybody within a thousand miles, so I just went to the climbing gym four or five (or six) times a week. But it was okay, because before long Matt, like Sabreen before him, adopted me!</p><p>He took me on my very first outdoor climbing trip, where I learned advanced techniques like \"belaying from a hammock\" and \"cleaning in the rain without dying (barely)\". Also, a scary bearded man emerged from the woods one night and yelled at us.</p><p>We fell a little out of touch when he moved to Colorado for PT school, but, uniquely among climbers who go to Colorado, Matt actually came back! We're both busy but I still sometimes get to hang out with him and his numerous dogs.</p>",
      photo: "matt.jpg",
      altPhoto: "matt-silly.jpg"
    }, {
      side: "bride",
      position: "Bridesmaid",
      name: "Mia Tang-Huang",
      intro: "Hi, I am Mia! I am Christine's sister-in-law. I was so happy to have another sister after moving to the U.S. It was very hard leaving my three older sisters who still live in Taiwan. Christine was very welcoming when I first arrived and helped me make America feel like a second home. Christine has been very generous towards our family, especially to my son Jonathan. Christine has gifted us countless things such as cribs, a baby shower, hand-sewn blankets, and many many toys. I am so lucky to have Christine as a sister and so happy to have Dan in our family too!",
      photo: "mia.jpg",
      altPhoto: "mia-silly.jpg"
    }]
  })
}
</script>