const state = () => ({
  username: undefined,
  email: undefined,
  isManager: false,
  fromServer: false,
});
const getters = {};
const mutations = {
  updateUser: (state, payload) => {
    state.user = payload;
  },
  updateUsername: (state, payload) => {
    state.username = payload;
  },
  updateEmail: (state, payload) => {
    state.email = payload;
  },
  updateIsAdministrator: (state, payload) => {
    state.isManager = payload;
  },
  updateFromServer: (state, payload) => {
    state.fromServer = payload;
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
