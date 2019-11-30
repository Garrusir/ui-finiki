import axios from 'axios'

export default {
  state: {
    email: '',
    code: '',
    isAuth: !!localStorage.getItem('user-token'),
    token: localStorage.getItem('user-token') || ''
  },
  getters: {
    getEmail(state){
      return state.email;
    },
    getCode(state){
      return state.code;
    },
    getAuth(state){
      return state.isAuth;
    }
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setCode(state, code) {
      state.code = code;
    },
    setAuth(state, isAuth) {
      state.isAuth = isAuth;
    }
  },
  actions: {
    sendEmail({commit, getters}) {
      const user = {Email: getters.getEmail}

      return axios({
        url: `https://finiki.vrrk.ru/api/token/login`,
        method: "POST",
        withCredentials: true,
        data: user
      })


      //return axios.post(`https://finiki.vrrk.ru/api/token/login`,  {withCredentials: true, body: user} )
    },
    sendToken({commit, getters}) {
      const token = {email: getters.getEmail, code: getters.getCode}

      return axios({
              url: `https://finiki.vrrk.ru/api/token/auth`,
              method: "POST",
              withCredentials: true,
              data: token
            }).then(token => {
          console.log(token.data);
          commit('setAuth', true);
          localStorage.setItem('user-token', token.data)
        }) 

      // return axios.post(`https://finiki.vrrk.ru/api/token/auth`, {withCredentials: true, body: token} )
        
      //   .catch(e => console.log(e))
    }
  }
}