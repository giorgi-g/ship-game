<template>
  <div class="boat-container" :class="containerClass">
    <div class="ship-clouds">
      <div
        class="ship-cloud large ship-cloud-1"
        :class="{ 'ship-cloud--disappear': gameState === STATUS_FINISHED }"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        class="ship-cloud medium ship-cloud-2"
        :class="{ 'ship-cloud--disappear': gameState === STATUS_FINISHED }"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        class="ship-cloud normal ship-cloud-3"
        :class="{ 'ship-cloud--disappear': gameState === STATUS_FINISHED }"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="boat">
      <div class="boat-bottom">
        <div class="squares">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
      </div>

      <div class="boat-behind"></div>
      <div
        class="boat-top-left"
        :class="
          gameState === STATUS_FINISHED ? `boat-top-left--${boat.color}` : ''
        "
      ></div>
      <div
        class="boat-top-right"
        :class="
          gameState === STATUS_FINISHED ? `boat-top-right--${boat.color}` : ''
        "
      ></div>
    </div>
  </div>
</template>

<script>
import { STATUS_FINISHED } from "@/models/constants";
import { mapState } from "vuex";

export default {
  name: "Boat",
  props: {
    index: {
      type: Number,
      required: false,
      default: 0
    },
    boat: {
      type: Object,
      required: true,
      default: null
    },
    position: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    ...mapState({
      gameState: state => state.gameRoom.gameState,
      ship: state => state.gameRoom.ship
    }),
    containerClass() {
      const position = this.position != null ? this.position : " ";
      const sink =
        this.gameState === this.STATUS_FINISHED && this.ship !== this.index
          ? " boat-container--sink"
          : "";
      return position + " " + sink;
    }
  },
  data() {
    return {
      STATUS_FINISHED: STATUS_FINISHED
    };
  }
};
</script>

<style scoped></style>
