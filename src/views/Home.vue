<template>
  <div class="home">
    <h1>Welcome to Book My Show</h1>
    <div v-if="!loggedIn">
      Please
      <router-link to="/login">Login</router-link>
      or
      <router-link to="/register">Register</router-link>
      to continue
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
  ...mapGetters(['loggedIn'])
  }
}
</script>

<style scoped>
    .home{
        text-align: center;
    }
</style>
