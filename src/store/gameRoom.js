import { STATUS_CHOOSE_WEAPON } from "@/models/constants";

export default {
  namespaced: true,
  state: {
    weapon: null,
    colors: ["red", "yellow", "green"],
    ships: [],
    ship: -1,
    winState: null,
    gameState: STATUS_CHOOSE_WEAPON
  },
  getters: {},
  mutations: {
    setWeapon: (state, weapon) => (state.weapon = weapon),
    setColors: (state, colors) => (state.colors = colors),
    setShips: (state, ships) => (state.ships = ships),
    addShip: (state, ship) => state.ships.push(ship),
    shootShip: (state, ship) => (state.ship = ship),
    setGameState: (state, payload) => (state.gameState = payload),
    setWinState: (state, payload) => (state.winState = payload)
  },
  actions: {
    resetShip: context => {
      const { state } = context;
      state.ship = -1;
    },
    clearShips: context => {
      const { state } = context;
      state.ships = [];
    },
    resetGameState: context => {
      const { state } = context;
      state.gameState = STATUS_CHOOSE_WEAPON;
    },
    resetWinState: context => {
      const { state } = context;
      state.winState = null;
    },
    reloadGameStates: context => {
      context.dispatch("resetShip");
      context.dispatch("clearShips");
      context.dispatch("resetWinState");
      context.dispatch("resetGameState");
    }
  }
};
