<template>
  <div class="search">
    <input class="form-control mr-sm-2" type="search" placeholder="search movie" aria-label="Search" v-model='query'>
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
