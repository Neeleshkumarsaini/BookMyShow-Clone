<template>
  <div id="app">
  <!-- <div class="nav-bar"><h1>BookMyShow</h1> 
    
  </div> -->
  <!-- Image and text -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="https://www.apkmirror.com/wp-content/uploads/2021/02/40/60322adf14a17.png" width="30" height="30" class="d-inline-block align-top" alt="">
    BookMyShow
  </a>
</nav>

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
  
  color: #2c3e50;
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
