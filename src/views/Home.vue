<template>
  <div class="home">
    <img class="home-banner" alt="Könnte geil werden." src="https://static.giga.de/wp-content/uploads/2017/01/GGA_Dreamhack-rcm992x0.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.home-banner {
  width: 100%;
  border-radius: var(--border-radius);
}
</style>
