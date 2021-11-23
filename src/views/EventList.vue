<template>
  <div class="search-bar"><EventSearch />
  </div>
  <h1 class="movies-heading">Movies</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="pagination">
    <router-link id="page-prev" :to="{ name: EventList, query: { page: page - 1 } }"
      v-if="page != 1">&#60; Previous 
    </router-link>

    <router-link id="page-next" :to="{ name: EventList, query: { page: page + 1 } }"
      >Next &#62;
    </router-link>
  </div> 
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
//import axios from "axios";
// import EventService from "@/services/EventService.js";
import EventSearch from "@/components/EventSearch.vue";
import { watchEffect } from 'vue';

export default {
  name: "EventList",
  props: ['page'],
  components: {
    EventCard,
    EventSearch
  },
  created() {
    watchEffect(() => {
      this.$store.dispatch('fetchEvents', this.page)
    })
  },
  computed:{
    events(){
      return this.$store.state.events
    },
  }
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
