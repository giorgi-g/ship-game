<template>
  <div id="app">
    <Game />
  </div>
</template>

<script>
import Game from "@/components/game/Game";

export default {
  name: "App",
  components: {
    Game
  },
  mounted() {
    // this.$store.commit('gameRoom/')
  }
};
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
