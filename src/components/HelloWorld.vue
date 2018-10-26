<template>
  <div class="hello">
    <h1>Hallo!</h1>
    <p>Wilkommen zur SUPER-DUPER-LAN!</p>
        <form method="post" action="/" netlify>
    <input type="hidden" name="form-name" value="testform_" />
      <input type="text" name="yourname"/>
      <input type="email" name="youremail"/>
      <br>
      <label for="extra-games">Dein Lieblingsspiel nicht dabei? Trage hier weitere Vorschläge ein!</label>
      <textarea id="extra-games" name="extra-games"/>
      <br>
      <button type="submit" class="btn-primary">Auswahl abschicken</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
