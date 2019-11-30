import axios from 'axios'

export default {
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    getProjects({commit, getters}) {
      return axios.get(`https://finiki.vrrk.ru/api/project/get`, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem('user-token')
        }
      })
        .then(res => {
          console.log(res)
        })
    }
  }
}