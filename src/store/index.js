import Vue from 'vue';
import Vuex from 'vuex';
import user from './components/user';
import sheets from './components/sheets';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    sheets,
  },
});
