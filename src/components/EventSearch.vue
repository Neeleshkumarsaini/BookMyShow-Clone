<template>
  <div class="search">
    <input type='text' placeholder="search movies" v-model='query'>
    <div v-for='result in results' :key='result.id'>
    <router-link :to="{ name: 'EventDetails', params: { id: result.id } }">
   <p>{{result.title}}</p>
   <img v-bind:src="'http://image.tmdb.org/t/p/w185/' +  result.poster_path">
  </router-link>
  </div>
  
  </div>
  
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'search',
    data () {
      return {
      query: '',
      results: '',
      // poster: 'http://image.tmdb.org/t/p/w500/'
    }
 },
  watch: {
    query(val) {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=af887aca762fa26e9947081957eeadef&query=' + val)
      .then(response => {
        this.results = response.data.results
        }
      )
    console.log(val)
    }
  },
  }

</script>

<style>
  .search{
    /* border: 1px solid; */
    margin: auto;
    width: 10%;
    /* margin-bottom: 10px; */
    
  }
</style>
