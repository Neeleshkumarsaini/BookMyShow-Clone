<template>
  <div class="search">
   
    <input class="form-control mr-sm-2" type="search" placeholder="search movie" aria-label="Search" v-model='query'>
    <div v-for='result in results' :key='result.id'>
    <router-link :to="{ name: 'EventDetails', params: { id: result.id } }">
   <p>{{result.title}}</p>
 
   <!-- <img v-bind:src="'http://image.tmdb.org/t/p/w185/' +  result.poster_path"> -->
  </router-link>
  </div>
  
  </div>
  
</template>
<script>
  // import axios from 'axios';
  // import EventService from "@/services/EventService.js";
  import { mapState } from 'vuex';
  export default {
    name: 'search',
    data () {
      return {
      query: '',
      
    }
 },
  watch: {
    query(val) {
      this.$store.dispatch('fetchSearchEvents', val)
        .catch(error => {
          this.$store.commit('SET_ERROR', error)
          this.$router.push({
            name: 'ErrorDisplay',
           
          })
        })
   
    }
  },
  computed:{
    ...mapState({
      results: 'search'
    })
   
  }
  }

</script>

<style>
  .search{
    /* border: 1px solid; */
    margin: auto;
    width: 30%;
    /* margin-bottom: 10px; */
    
  }
</style>
