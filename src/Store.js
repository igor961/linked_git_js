import Vue from 'vue'
import Vuex from 'vuex'
import GitHub from 'github-api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authed: false,
    gh: new GitHub()
  },
  mutations: {
  	auth: (state, cred) => {
  		state.authed = true
  		state.gh = new GitHub(cred)
  		console.log(state.gh)
  	},
    unauth: state => {
    	state.authed = false
    	state.gh = new GitHub()
    }
  }
})