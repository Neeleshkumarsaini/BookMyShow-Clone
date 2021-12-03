<template>
  <div id="app">
  <app-nav />

  <div id="nav">
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view />
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  components: { AppNav }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  /* padding: 10px; */
  color: #2c3e50;
  /* background-color: #92a8d1; */
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar {
  background: linear-gradient(-90deg, #16c0b0,#cf6a88 );
  height: 80px;
 
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);

}

</style>
