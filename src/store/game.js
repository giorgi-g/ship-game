export default {
  namespaced: true,
  state: {
    games: [],
    orders: {},
    myOrders: {}
  },
  getters: {
    getGames: state => state.games,
    getOrders: state => state.orders,
    getSound: state => state.sound
  },
  mutations: {
    setGames: (state, games) => (state.games = games),
    setOrders: (state, orders) => (state.orders = orders),
    setSound: (state, sound) => (state.sound = sound)
  },
  actions: {}
};
