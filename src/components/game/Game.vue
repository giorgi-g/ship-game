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
        <div class="sun-glow-1"></div>
        <div class="sun-glow-2"></div>
        <div class="sun-glow-3"></div>
      </div>

      <Pyramids />
    </div>
    <div class="bottom">
      <Boat />
      <Boat />
      <Boat position="boat--middle" />

      <MainSunReflexions />

      <SmallSunReflexions />
    </div>
  </div>
</template>

<script>
import Stars from "@/components/game/Stars";
import Pyramids from "@/components/game/Pyramids";
import MainSunReflexions from "@/components/game/MainSunReflexions";
import SmallSunReflexions from "@/components/game/SmallSunReflexions";
import Boat from "@/components/game/Boat";

export default {
  components: {
    Boat,
    SmallSunReflexions,
    MainSunReflexions,
    Pyramids,
    Stars
  },
  name: "Game"
};
</script>

<style lang="scss">
@keyframes sun-glow-1 {
  0% {
    //transform: scale(0.9);
    box-shadow: 0 0 0 rgba(255, 176, 88, 0.3),
      inset 0 0 0 rgba(255, 176, 88, 0.3);
  }
  25% {
    //transform: scale(1.1);
    box-shadow: 0 0 26px rgba(255, 176, 88, 0.3),
      inset 0 0 26px rgba(255, 176, 88, 0.3);
  }
  45% {
    //transform: scale(1);
    box-shadow: 0 0 52px rgba(255, 176, 88, 0.2),
      inset 0 0 52px rgba(255, 176, 88, 0.2);
  }
  65% {
    //transform: scale(1.2);
    box-shadow: 0 0 80px rgba(255, 176, 88, 0.1),
      inset 0 0 80px rgba(255, 176, 88, 0.1);
  }
  100% {
    //transform: scale(0.9);
    box-shadow: 0 0 0 rgba(255, 176, 88, 0.3),
      inset 0 0 0 rgba(255, 176, 88, 0.3);
  }
}

@keyframes sun-glow-2 {
  0% {
    //transform: scale(0.9);
    box-shadow: 0 0 0 rgba(255, 176, 88, 0.2),
      inset 0 0 0 rgba(255, 176, 88, 0.2);
  }
  25% {
    //transform: scale(1.1);
    box-shadow: 0 0 16px rgba(255, 176, 88, 0.2),
      inset 0 0 14px rgba(255, 176, 88, 0.2);
  }
  45% {
    //transform: scale(1);
    box-shadow: 0 0 32px rgba(255, 176, 88, 0.2),
      inset 0 0 32px rgba(255, 176, 88, 0.2);
  }
  65% {
    //transform: scale(1.2);
    box-shadow: 0 0 16px rgba(255, 176, 88, 0.2),
      inset 0 0 14px rgba(255, 176, 88, 0.2);
  }
  100% {
    //transform: scale(0.9);
    box-shadow: 0 0 0 rgba(255, 176, 88, 0.2),
      inset 0 0 0 rgba(255, 176, 88, 0.2);
  }
}

@keyframes sun-glow-3 {
  0% {
    //transform: scale(0.9);
    box-shadow: 0 0 0 rgba(255, 176, 88, 0.1),
      inset 0 0 0 rgba(255, 176, 88, 0.1);
  }
  25% {
    //transform: scale(1.1);
    box-shadow: 0 0 16px rgba(255, 176, 88, 0.1),
      inset 0 0 14px rgba(255, 176, 88, 0.1);
  }
  45% {
    //transform: scale(1);
    box-shadow: 0 0 32px rgba(255, 176, 88, 0.1),
      inset 0 0 32px rgba(255, 176, 88, 0.1);
  }
  65% {
    //transform: scale(1.2);
    box-shadow: 0 0 16px rgba(255, 176, 88, 0.1),
      inset 0 0 14px rgba(255, 176, 88, 0.1);
  }
  100% {
    //transform: scale(0.9);
    box-shadow: 0 0 0 rgba(255, 176, 88, 0.1),
      inset 0 0 0 rgba(255, 176, 88, 0.1);
  }
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
      animation-delay: #{$i * $delay}s;
    }
  }
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
