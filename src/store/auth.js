import axios from 'axios'

export default {
  state: {
    count: 0
  },
  getters: {
    getCount(state){
      return state.count;
    }
  },
  mutations: {
    addCount(state, payload) {
      state.count += payload
    }
  },
  actions: {
    login({commit}) {
      console.log('auth...');
      axios.get('​https://finiki.vrrk.ru/api/project​/get').then(()=> {
        console.log('done');
      })
    }
  }
}