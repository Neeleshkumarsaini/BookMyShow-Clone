<template>
  <div id="app">
  <div class="nav-bar"></div>
  <div id="nav">
    <router-link :to="{ name: 'EventList' }">Events</router-link> | 
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* padding: 10px; */
  color: #2c3e50;
  background-color: #92a8d1;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-bar {
  background: linear-gradient(-90deg, #16c0b0,#cf6a88 );
  height: 60px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}
</style>
