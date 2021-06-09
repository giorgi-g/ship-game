<template>
  <div class="cannons-group">
    <div class="row" v-if="gameState === STATUS_CHOOSE_WEAPON">
      <h2>
        Choose A Cannon
      </h2>

      <div
        class="col-xs-4 col-sm-4"
        :key="`cannon-${index}`"
        v-for="(item, index) of colors"
      >
        <div :class="`cannon cannon--${item}`" @click="selectWeapon(item)">
          {{ item }} Cannon
        </div>
      </div>
    </div>

    <div class="row" v-if="gameState === STATUS_WAITING">
      <h2>
        Select a ship to shoot
        <button
          class="cannon cannon--default cannon--go-back"
          @click="selectWeapon(null)"
        >
          Go Back
        </button>
      </h2>

      <div class="col-xs-4 col-sm-4">
        <div class="cannon" :class="cannonColor" @click="Shoot(0)">
          First Ship
        </div>
      </div>

      <div class="col-xs-4 col-sm-4">
        <div class="cannon" :class="cannonColor" @click="Shoot(1)">
          Second Ship
        </div>
      </div>

      <div class="col-xs-4 col-sm-4">
        <div class="cannon" :class="cannonColor" @click="Shoot(2)">
          Third Ship
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  STATUS_CHOOSE_WEAPON,
  STATUS_FINISHED,
  STATUS_STARTED,
  STATUS_WAITING,
  YOU_LOSE,
  YOU_WIN
} from "@/models/constants";
import gameMixins from "@/mixins/gameMixins";

export default {
  name: "Cannons",
  computed: {
    ...mapState({
      weapon: state => state.gameRoom.weapon,
      ships: state => state.gameRoom.ships,
      gameState: state => state.gameRoom.gameState,
      colors: state => state.gameRoom.colors
    }),
    cannonColor() {
      return `cannon--${this.weapon}`;
    }
  },
  mixins: [gameMixins],
  data() {
    return {
      STATUS_CHOOSE_WEAPON: STATUS_CHOOSE_WEAPON,
      STATUS_WAITING: STATUS_WAITING,
      STATUS_FINISHED: STATUS_FINISHED,
      STATUS_STARTED: STATUS_STARTED,
      YOU_WIN: YOU_WIN,
      YOU_LOSE: YOU_LOSE
    };
  },
  methods: {
    selectWeapon(color) {
      this.$store.commit("gameRoom/setWeapon", color);
      this.$store.commit("gameRoom/setGameState", this.STATUS_WAITING);
    },
    Shoot(index = null) {
      this.$store.commit("gameRoom/setGameState", this.STATUS_STARTED);

      setTimeout(() => {
        this.$store.commit("gameRoom/shootShip", index);
        const ship = this.ships[index];
        if (ship.color === this.weapon) {
          this.$store.commit("gameRoom/setWinState", YOU_WIN);
        } else {
          this.$store.commit("gameRoom/setWinState", YOU_LOSE);
        }
        this.$store.commit("gameRoom/setGameState", this.STATUS_FINISHED);
      }, 2000);

      setTimeout(() => {
        this.loadShips();
      }, 17000);
    },
    resetShoot() {
      this.$store.dispatch("gameRoom/resetShip");
    }
  }
};
</script>

<style scoped lang="scss">
.cannons-group {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  z-index: 999;

  h2 {
    top: -40px;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #fff;
    font-family: "Open Sans";
    text-transform: uppercase;
  }

  .row {
    min-height: 100%;
  }
}

.cannon {
  text-align: center;
  position: relative;
  cursor: pointer;
  display: flex;
  height: calc(100% - 20px);
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 200px;
  color: #fff;
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Open Sans";
  letter-spacing: 2px;

  &--go-back {
    display: inline-block;
    padding: 6px 0;
    margin-left: 30px;
    width: 120px;
  }

  &--default {
    background: #fca054;
  }

  &--red {
    background: crimson;
  }

  &--yellow {
    background: #d7af35;
  }

  &--green {
    background: #30c430;
  }
}
</style>
