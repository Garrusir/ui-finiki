import axios from 'axios'

export default {
  state: {
    groups: [],
    selectedAPI: null,
  },
  getters: {
    getGroups(state){
      return state.groups
    },
    getSelectedAPI(state){
      return state.selectedAPI;
    }
  },
  mutations: {
    setGroups(state, payload){
      state.groups = payload;
      console.log(state.groups); 
    },
    setAPI(state, payload){
      state.selectedAPI = payload;
    }
  },
  actions: {
    getProjects({commit, getters}) {
      return axios.get(`https://finiki.vrrk.ru/api/project/get`, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem('user-token')
        }
      })
        .then(res => {
          commit('setGroups', res.data)
          console.log('setGroups', getters.getGroups)
        })
    },
    loadAPI({commit, getters}, id) {
      // return axios.get(`https://finiki.vrrk.ru/api/project/get`, {
      //   headers: {
      //     "Authorization": "Bearer " + localStorage.getItem('user-token')
      //   }
      // })
      //   .then(res => {
      //     commit('setGroups', res.data)
      //     console.log('setGroups', getters.getGroups)
      //   })
      console.log('loading API id:', id);
      commit('setAPI', {
          request: {value: 'Hello'},
          response: {value: 'Hello', data: {name: 'Hello', key: Math.random(65)}},
          state: 'up'
        })
    },
  }
}