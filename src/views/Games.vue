<template>
  <div class="games-wrapper">
    <h1 class="gradient-title">Spiele</h1>
    <p>
      Hier die Liste mit Spielen. Wähle die Spiele aus die du gerne auf der LAN spielen würdest. Falls dein Lieblings-LAN-Spiel nicht dabei ist trag es einfach unten ein!
    </p>
    <form method="post" data-netlify="true">
    <input type="hidden" name="form-name" value="games" />
      <div class="cards-container">
        <game-card v-for="game in games" :key="game.title" :game="game"/>
      </div>
      <br>
      <label for="extra-games">Dein Lieblingsspiel nicht dabei? Trage hier weitere Vorschläge ein!</label>
      <textarea id="extra-games" name="extra-games"/>
      <br>
      <button class="btn-primary">Auswahl abschicken</button>
    </form>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";
export default {
  data() {
    return {
      games: [
        {
          title: 'CounterStrike 1.6',
          id: 'cs-16',
          img: 'http://fc07.deviantart.net/fs70/f/2014/108/b/d/counter_strike_1_6_icon_by_dudekpro-d7f0049.png',
        },
        {
          title: 'Counterstrike Global Offensive',
          id: 'csgo',
          img: 'https://vignette.wikia.nocookie.net/cswikia/images/0/0c/Csgo-payback-icon.png/revision/latest?cb=20141112151119',
        },
        {
          title: 'Warcraft 3',
          id: 'wc3',
          img: 'http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-18/256/Warcraft-3-Frozen-Throne-1-icon.png',
        },
      ]
    }
  },
  methods: {
     handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "ask-question",
          ...this.form
        })
      })
        .then(() => {
          this.$router.push("saved");
        })
        .catch(() => {
          this.$router.push("home");
        });
    }
  },
  components: {
    GameCard
  }
}
</script>

<style scoped lang="scss">
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: center;
  .game-card {
    justify-self: center;
  }
}

textarea {
  font-family: var(--font-family);
  background-color: var(--background-color);
  color: var(--font-color-light);
  border-radius: var(--border-radius);
  font-size: 18px;
  width: 100%;
  resize: vertical;
}
// .gradient-title {
//   background-image: linear-gradient(to right, #343434, #565656, #7b7b7b, #a1a1a1, #cacaca);
//   color: white;
//   padding: 10px;
//   position: absolute;
//   width: 100%;
// }
</style>