<template>
  <div class="search">
    <input type='text' placeholder="search movies" v-model='query' @keyup='getResult(query)'>
    <div v-for='result in results' :key='result.id'>
    <router-link :to="{ name: 'EventDetails', params: { id: result.id } }">
   <p>{{result.title}}</p>
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
      // poster: 'http://image.tmdb.org/t/p/w200/'
    }
 },
  methods: {
    getResult(query) {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=af887aca762fa26e9947081957eeadef&query=' + query)
      .then(response => {
        this.results = response.data.results 
        }
      )
    console.log(query)
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
