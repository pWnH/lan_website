<template>
  <div class="games-wrapper">
    <h1>Spiele</h1>
    <p>
      Hier die Liste mit Spielen:
    </p>
    <form method="post" action="/" netlify>
    <input type="hidden" name="form-name" value="games" />
      <div class="cards-container">
        <game-card v-for="game in games" :key="game.title" :game="game"/>
      </div>
      <br>
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
</style>