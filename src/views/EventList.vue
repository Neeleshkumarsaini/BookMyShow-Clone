<template>
  <div class="events">
    <h1>Movies</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
//import axios from "axios";
import EventService from "@/services/EventService.js"

export default {
  name: "EventList",
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
	  //get movies data from api
	  //axios.get('https://api.themoviedb.org/3/movie/550?api_key=af887aca762fa26e9947081957eeadef')
	  EventService.getEvents()
	  .then(response => {
		  this.events = response.data.results
      //console.log(response.data.results)
	  })
	  .catch(error => {
		  console.log(error)
	  })
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>