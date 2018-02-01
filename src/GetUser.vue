<template>
  <div>
    <input type="login" v-model="user" v-on:keyup.enter="ok()" id="login">
    <div v-if="ghUser">
      <h3>Login: {{ ghUser.login }}</h3>
      <h3>Name: {{ ghUser.name }}</h3>
      <h3>Email: {{ ghUser.email }}</h3>
    </div>
    <h6 v-if="error">Error: {{ error }}</h6>
  </div>
</template>

<script>
import Store from './Store'
import Vue from 'vue'

export default {
  name: 'GetUser',
  data () {
    return {
      user: "",
      ghUser: "",
      error: ""
    }
  },
  methods: {
    ok () {
      Store.state.gh.getUser(this.user).getProfile((err, user) => {
         this.ghUser = user
         if (err)
          this.error = err.response.data.message
         else this.error = ""
      })
    }
  }
}
</script>
