import { mapState } from "vuex";
import Ship from "@/models/classes/Ship";

export default {
  computed: {
    ...mapState({
      colors: state => state.gameRoom.colors
    })
  },
  methods: {
    getRandomUniqueColor(addedColor = []) {
      const colors = [];

      this.colors
        .filter(x => !addedColor.includes(x))
        .forEach(item => {
          colors.push(item);
        });

      const random = Math.floor(Math.random() * colors.length);

      return colors[random];
    },
    loadShips() {
      this.$store.dispatch("gameRoom/reloadGameStates");

      const colors = [];
      for (let i = 0; i < 3; i++) {
        const color = this.getRandomUniqueColor(colors);

        colors.push(color);

        this.$store.commit(
          "gameRoom/addShip",
          new Ship(i + 1, `${color} ship`, color, `boat-container--${i}`)
        );
      }
    }
  }
};
