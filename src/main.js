import Vue from 'vue'
import GitHub from 'github-api'
import Store from './Store'
import Login from './Login.vue'
import GetUser from './GetUser.vue'

new Vue({
  el: '#app',
  computed: {
    authed () {return Store.state.authed}
  },
  components: {'User': GetUser, 'Login': Login}
})
