<template>
  <div class="relative relative--full-screen">
    <div class="top">
      <Stars />
      <div class="shooting-star"></div>

      <div class="clouds">
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
      </div>

      <div class="sun">
        <div class="sun--win-state" v-if="gameState === STATUS_FINISHED">
          {{ winState }}
        </div>
        <div class="sun-glow-1"></div>
        <div class="sun-glow-2"></div>
        <div class="sun-glow-3"></div>
      </div>

      <Pyramids />
    </div>
    <div class="bottom">
      <Boat
        :boat="item"
        v-for="(item, index) of ships"
        :key="item.id"
        :index="index"
        :position="item.position"
      />

      <MainSunReflexions />

      <SmallSunReflexions />
    </div>

    <Cannons />
  </div>
</template>

<script>
import Stars from "@/components/game/Stars";
import Pyramids from "@/components/game/Pyramids";
import MainSunReflexions from "@/components/game/MainSunReflexions";
import SmallSunReflexions from "@/components/game/SmallSunReflexions";
import Boat from "@/components/game/Boat";
import Cannons from "@/components/game/Cannons";
import { mapState } from "vuex";
import { STATUS_FINISHED } from "@/models/constants";
import gameMixins from "@/mixins/gameMixins";

export default {
  components: {
    Boat,
    SmallSunReflexions,
    MainSunReflexions,
    Pyramids,
    Stars,
    Cannons
  },
  name: "Game",
  data() {
    return {
      STATUS_FINISHED: STATUS_FINISHED
    };
  },
  mixins: [gameMixins],
  computed: {
    ...mapState({
      ships: state => state.gameRoom.ships,
      winState: state => state.gameRoom.winState,
      gameState: state => state.gameRoom.gameState
    })
  },
  mounted() {
    this.loadShips();
  }
};
</script>

<style lang="scss">
@keyframes boat-float {
  0% {
    transform: translateY(0) rotate(0);
  }
  25% {
    transform: translateY(0) rotate(-10deg);
  }
  40% {
    transform: translateY(4px) rotate(-10deg);
  }
  85% {
    transform: translateY(1px) rotate(10deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

@keyframes boat-float-2 {
  0% {
    transform: rotate(0deg) translateX(0);
  }
  25% {
    transform: rotate(-7deg) translateX(-20px);
  }
  50% {
    transform: rotate(10deg) translateX(20px);
  }
  75% {
    transform: rotate(-7deg) translateX(20px);
  }
  100% {
    transform: rotate(0deg) translateX(0);
  }
}

@keyframes sun-pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes sun-glow-1 {
  0% {
    box-shadow: 0 0 0 rgba(252, 160, 84, 0.3), 0 0 0 rgba(252, 160, 84, 0.3);
  }
  80% {
    box-shadow: 0 0 100px rgba(252, 160, 84, 0.3),
      0 0 100px rgba(252, 160, 84, 0.3);
  }
  95% {
    box-shadow: 0 0 30px transparent, 0 0 30px transparent;
  }
  100% {
    box-shadow: 0 0 0 transparent, 0 0 0 transparent;
  }
}

@keyframes sun-glow-2 {
  0% {
    box-shadow: 0 0 0 rgba(252, 160, 84, 0.2), 0 0 0 rgba(252, 160, 84, 0.2);
  }
  80% {
    box-shadow: 0 0 100px rgba(252, 160, 84, 0.2),
      0 0 100px rgba(252, 160, 84, 0.2);
  }
  95% {
    box-shadow: 0 0 30px transparent, 0 0 30px transparent;
  }
  100% {
    box-shadow: 0 0 0 transparent, 0 0 0 transparent;
  }
}

@keyframes sun-glow-3 {
  0% {
    box-shadow: 0 0 0 rgba(252, 160, 84, 0.1), 0 0 0 rgba(252, 160, 84, 0.1);
  }
  80% {
    box-shadow: 0 0 100px rgba(252, 160, 84, 0.1),
      0 0 100px rgba(252, 160, 84, 0.1);
  }
  95% {
    box-shadow: 0 0 30px transparent, 0 0 30px transparent;
  }
  100% {
    box-shadow: 0 0 0 transparent, 0 0 0 transparent;
  }
}

.sun {
  animation: sun-pulse 10s linear infinite;
}

.sun-glow-1 {
  animation: sun-glow-1 10s linear infinite;
}

.sun-glow-2 {
  animation-delay: 2s;
  animation: sun-glow-2 10s linear infinite;
}

.sun-glow-3 {
  animation-delay: 4s;
  animation: sun-glow-3 10s linear infinite;
}

@keyframes pulse-small-sun-reflexion {
  0% {
    transform: translateX(0) translateY(0) scaleY(0.1) scaleX(2);
    box-shadow: 0 0 0 #fca054, inset 0 0 0 #fca054;
  }
  25% {
    transform: translateX(100%) translateY(-100%) scaleY(0.2) scaleX(3);
    box-shadow: 0 0 16px #fca054, inset 0 0 14px #fca054;
  }
  45% {
    transform: translateX(70%) translateY(-70%) scaleY(0.3) scaleX(5);
    box-shadow: 0 0 32px #fca054, inset 0 0 32px #fca054;
  }
  65% {
    transform: translateX(-20%) translateY(-30%) scaleY(0.2) scaleX(3);
    box-shadow: 0 0 16px #fca054, inset 0 0 14px #fca054;
  }
  100% {
    transform: translateX(0%) translateY(0%) scaleY(0.1) scaleX(2);
    box-shadow: 0 0 0 #fca054, inset 0 0 0 #fca054;
  }
}

@mixin addAnimationDelay($num, $delay) {
  @for $i from 1 through $num {
    &:nth-child(#{$i}) {
      animation-delay: #{$i * $delay}s !important;
    }
  }
}

@mixin addAnimationDelayPrefix($suffix, $num, $delay) {
  @for $i from 1 through $num {
    &:nth-child(#{$i}) #{$suffix} {
      animation-delay: #{$i * $delay}s !important;
    }
  }
}

.boat-container {
  .boat {
    animation: boat-float 10s linear infinite !important;
  }

  @include addAnimationDelayPrefix(".boat", 30, 2);
}

.small-sun-reflexions {
  .reflexion {
    transform: translateX(0) translateY(0) scaleY(0.1) scaleX(2);
    box-shadow: 0 0 0 #fca054, inset 0 0 0 #fca054;
    animation: pulse-small-sun-reflexion 10s linear infinite;
    @include addAnimationDelay(30, 1);
  }
}
</style>
