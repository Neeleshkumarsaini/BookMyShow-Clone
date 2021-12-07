<template>
  <div v-if="!isLoading" class="search-bar"><EventSearch />
  </div>
  <h1 class="movies-heading">Movies</h1>
  <div v-if="!isLoading">
  <div v-if="search.length==0" class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div v-else class="events">
    <EventCard v-for="searching in search" :key="searching.id" :event="searching" />
  </div>  
  <div v-if="search.length==0" class="pagination">
    <router-link id="page-prev" :to="{ name: EventList, query: { page: page - 1 } }"
      v-if="page != 1">&#60; Previous 
    </router-link>

    <router-link id="page-next" :to="{ name: EventList, query: { page: page + 1 } }"
      >Next &#62;
    </router-link>
  </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import axios from "axios";
// import EventService from "@/services/EventService.js";
import EventSearch from "@/components/EventSearch.vue";
import { mapState } from 'vuex';

export default {
  name: "EventList",
  props: ['page'],
  components: {
    EventCard,
    EventSearch
  },
   data() {
     return {
      
      server_response: null,
      isLoading: true,
    }
  },
  created() {
        axios.get('https://a265-103-148-180-81.ngrok.io/dashboard').then(({ data }) => {
      this.server_response = data.events
      
      this.isLoading = false
    })
      
      this.$store.dispatch('fetchEvents', this.page)
      .catch( error => {
        this.$store.commit('SET_ERROR', error)
       this.$router.push({
         name: 'ErrorDisplay',
      
       })
    })
      
  },
  watch:{
    page(val){
      
      this.$store.dispatch('fetchEvents', val)
    }
  },
  
  computed: {
    
    ...mapState(['events', 'search'])
    
  },
    
};
</script>

<style scoped>
.events {
  display: flex;
  flex-wrap: wrap;
  
  /* flex-direction: column; */
  /* align-items: center; */
}
.movies-heading{
  text-align: center;
}
.pagination {
  display: flex;
  width: 200px;
  /* border: 1px solid; */
  margin-left: 75vw;
  padding: 10px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
