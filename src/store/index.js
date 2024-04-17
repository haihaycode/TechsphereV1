import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Trạng thái của ứng dụng\
    isLogin: false,
  },
  mutations: {
    // Các mutations để thay đổi trạng thái
    SET_LOGIN_STATUS(state, status) {
        state.isLogin = status;
      }
  },
  actions: {
    // Các actions để thực hiện các tác vụ không đồng bộ
    updateLoginStatus({ commit }, status) {
        commit('SET_LOGIN_STATUS', status);
      }
  },
  modules: {
    // Các modules để chia nhỏ store thành các phần nhỏ hơn
  }
})
