const state = () => ({
  sheets: [],
  sheetExpand: false,
});
const getters = {};
const mutations = {
  addSheet: (state, payload) => {
    state.sheets.push(payload);
  },
  sheetExpand: (state) => {
    state.sheetExpand = !state.sheetExpand;
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
