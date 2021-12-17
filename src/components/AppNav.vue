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
    <button v-else type="button" class="button" @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
  ...mapGetters(['loggedIn']),
  
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({
        name: 'Home'
      });
      // console.log('Logged out')
    }
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

/* .nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: white;
} */

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

.button {
  margin-left: auto;
  /* background-color: #cf6a88; */
  /* background: #c0a716; */
    background: white;
  border-radius: 5px;
  font-size: 18px;
  width: 80px;
  height: 50px;
  /* color: white; */
  color: #2c3e50;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  padding: 10px;
  cursor: pointer;
}

 /* button,
.button {
  margin-left: auto;
  background: white; */
  /* text-decoration: none; */
  /* color: #2c3e50;
}  */

/* .logoutButton {
  cursor: pointer;
} */

/* .nav-welcome + button {
  margin-left: 0;
} */
</style>
