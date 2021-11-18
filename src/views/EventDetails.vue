<template>
  <div v-if="event">
    <div class="movie-details">
      <img class="movie-image" v-bind:src="image" alt="movie-poster">
      <div class="movie-description">
        <h1>{{ event.original_title }}</h1> 
        <p><strong>Popularity:</strong> {{ event.popularity }}</p>
        <p><strong>Number of Votes:</strong> {{ event.vote_count }}</p>
        <p><strong>Votes Average:</strong> {{ event.vote_average }}</p>
        <p><strong>Release Date:</strong> {{ event.release_date }}</p>
        <p><strong>Runtime:</strong> {{ Math.floor(event.runtime/60) +'hr ' + event.runtime%60 + 'min' }}</p>
        <p><strong>Production Companies:</strong> <span v-for="pc in event.production_companies" :key="pc.id">{{ pc.name + ', ' }}</span></p>
        <p><strong>Genres:</strong> <span v-for="genre in event.genres" :key="genre.id">{{ genre.name + ', ' }}</span></p> 
      </div>
    </div>
    <div class="movie-ticket-details">
      <h2>About the movie</h2>
      <p class="movie-overview">{{ event.overview }}</p>
      <h2>Cinema Halls</h2>
      <ul class="Halls-list">
        <li v-for="(availaible,index) in availability" :key="index">
          <h3>{{ availaible.city }}</h3>
          <!-- <p v-if="availaible.tickets > 0"> Tickets Available: {{ availaible.tickets }}</p>
          <p v-else>All Tickets Booked!!!</p> -->
          <p v-for="(cinemaHall, i) in availaible.cinemaHalls" :key="i">{{ cinemaHall.Hall + ':  ' + cinemaHall.tickets }} </p>
        </li>
      </ul>
    </div>
    <!-- <span> 
        <button class="button" v-bind:class="{ disabledButton: availability[0].tickets==0 }" v-on:click="bookTicketNoida">Book Noida Ticket 
        </button>
        <button class="button" v-bind:class="{ disabledButton: availability[1].tickets==0 }" v-on:click="bookTicketDelhi">Book Delhi Ticket 
        </button>
        <button class="button" v-bind:class="{ disabledButton: availability[2].tickets==0 }" v-on:click="bookTicketJaipur">Book Jaipur Ticket 
        </button>
        
    </span> -->
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null,
      availability: [
        {city: 'Noida',
          cinemaHalls: [
            { Hall: 'Sargam Hall', tickets: 1},
            { Hall: 'Amba Cinema', tickets: 2},
            { Hall: 'Walkway Mall', tickets: 3}
          ],
        },
        {
          city: 'Delhi',
          cinemaHalls: [
            { Hall: 'Mega Mall', tickets: 2},
            { Hall: 'Star Mall', tickets: 3}
          ],
        },
        {
          city: 'Jaipur',
          cinemaHalls: [
            { Hall: 'Vishal Multiplex', tickets: 3},
            { Hall: 'Elite Hall', tickets: 4}
          ],
        }
      ],
      poster: 'https://image.tmdb.org/t/p/w342'
    }
  },
  // methods: {
  //   bookTicketNoida(){
  //     if(this.availability[0].tickets > 0){
  //       this.availability[0].tickets -=1
  //     }
  //   },
  //   bookTicketDelhi(){
  //     if(this.availability[1].tickets > 0){
  //       this.availability[1].tickets -=1
  //     }
  //   },
  //   bookTicketJaipur(){
  //     if(this.availability[2].tickets > 0){
  //       this.availability[2].tickets -=1
  //     }
  //   }
  // },
  computed: {
    image(){
      return this.poster + this.event.poster_path
    }
  },
  mounted() {
    // fetch event and set local event data
    EventService.getEvent(this.$route.params.id)
	  .then(response => {
		  this.event = response.data
      console.log(response.data)
	  })
	  .catch(error => {
		  console.log(error)
	  })
  }
}
</script>

<style> 
  .Halls-list{
    list-style-type:none;
  }
  .button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
  height: 60px;
  color: white;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  padding: 10px;
  cursor: pointer;
}
.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}
 .movie-details{
  /* text-align: center; */
  display: flex;
  /* border: 1px solid; */
} 
.movie-description{
  display: flex;
  flex-direction: column;
  /* border: 1px solid; */
  margin-left: 20px;
}
 .movie-image{
  margin: 10px;
  margin-left: 20px;
} 
.movie-ticket-details{
  margin-left: 10px;
}
.movie-overview{
  margin: 20px;
  margin-right: 30%;
}
</style>
