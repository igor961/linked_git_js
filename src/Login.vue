<template>
  <div>
    <input type="login" v-model="credentials.username" id="login">
    <input type="password" v-model="credentials.password" id="pass">
    <button v-on:click="login()">Login</button>
  </div>
</template>

<script>
import Store from './Store'
import Vue from 'vue'

export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        username: '', 
        password: ''
      }
    }
  },
  methods: {
    login () {
      Store.commit('auth', this.credentials)
    }
  }
}
</script>
