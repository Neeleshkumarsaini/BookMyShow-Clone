<template>
  <div class="search">
    <!-- <input type='text' placeholder="search movies" v-model='query'> -->
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
  export default {
    name: 'search',
    data () {
      return {
      query: '',
      // results: '',
      // poster: 'http://image.tmdb.org/t/p/w500/'
    }
 },
  watch: {
    query(val) {
      this.$store.dispatch('fetchSearchEvents', val)
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error}
          })
        })
    //   EventService.getSearch(val)
	  //  .then(response => {
		//    this.results = response.data.results
    //    //console.log(response.data.results)
	  //  })
	  //  .catch(error => {
		//    console.log(error)
	  //  })

    //   axios.get('https://api.themoviedb.org/3/search/movie?api_key=af887aca762fa26e9947081957eeadef&query=' + val)
    //   .then(response => {
    //     this.results = response.data.results
    //     }
    //   )
    // console.log(val)
    }
  },
  computed:{
    results(){
      return this.$store.state.search
    }
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
