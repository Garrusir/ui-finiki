import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './store/auth'
import API from './store/api'

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    Auth,
    API
  }
})