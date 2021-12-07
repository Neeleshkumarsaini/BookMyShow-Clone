<template>
  <div id="nav">
      <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="https://www.apkmirror.com/wp-content/uploads/2021/02/40/60322adf14a17.png" width="30" height="30" class="d-inline-block align-top" alt="">
    BookMyShow
  </a>
</nav>
    <router-link to="/">
      Home
    </router-link>
    <router-link v-if="loggedIn" to="/dashboard">
      Dashboard
    </router-link>
    <router-link v-if="!loggedIn" to="/login" class="button">
      Login
    </router-link>
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
#nav {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.2em 1em;
  background: linear-gradient(to right, #cf6a88, #16c0b0);
}


a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}

.router-link-exact-active {
  color: white;
  border-bottom: 2px solid #fff;
}

button,
.button {
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;
}

.logoutButton {
  cursor: pointer;
}


</style>
