export default {
  namespaced: true,
  state: {
    loginFailed: false
  },
  getters: {
    getLoginFailedState: state => state.loginFailed
  },
  mutations: {
    setLoginFailedState: (state, bool) => (state.loginFailed = bool)
  },
  actions: {}
};
