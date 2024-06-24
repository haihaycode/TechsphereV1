// store/index.js

import { createLogger, createStore } from 'vuex';
import Cookies from 'js-cookie';

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  state: {
    token: null,
    isLogin: false,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOGIN_STATUS(state, status) {
      state.isLogin = status;
    },
  },
  actions: {
    checkToken({ commit }) {
      const token = Cookies.get('authToken');
      if (token) {
        console.log('Token found in cookies:', token);
        commit('SET_TOKEN', token);
        commit('SET_LOGIN_STATUS', true);
      } else {
        console.log('No token found in cookies');
        commit('SET_TOKEN', null);
        commit('SET_LOGIN_STATUS', false);
      }
    },
    login({ commit }, token) {
      commit('SET_TOKEN', token);
      commit('SET_LOGIN_STATUS', true);
      Cookies.set('authToken', token); // Example: Set token in cookies
    },
    async logout({ commit }) {
      commit('SET_TOKEN', null);
      commit('SET_LOGIN_STATUS', false);
      Cookies.remove('authToken');
    },
  },
  plugins: debug ? [createLogger()] : [],
});

export default store;
