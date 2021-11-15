<template>
  <div>
    <h1>{{ event.original_title }}</h1>
    <img v-bind:src="image" alt="movie-poster">
    <p>{{ event.overview }}</p>
    <p><strong>Popularity:</strong> {{ event.popularity }}</p>
    <p><strong>Number of Votes:</strong> {{ event.vote_count }}</p>
    <p><strong>Votes Average:</strong> {{ event.vote_average }}</p>
    <p><strong>Release Date:</strong> {{ event.release_date }}</p>

    <h2>Cinema Halls</h2>
    <ul class="Halls-list">
      <li>
        <h3>Noida</h3>
        <p v-if="tickets[0] > 0">Tickets Available: {{tickets[0]}}</p>
        <p v-else>All Tickets Booked!!!</p>
        <button class="button" v-bind:class="{ disabledButton: tickets[0]==0 }" v-on:click="bookTicketNoida">Book Ticket
        </button>
      </li>
      <li>
        <h3>Delhi</h3>
        <p v-if="tickets[1] > 0">Tickets Available: {{tickets[1]}}</p>
        <p v-else>All Tickets Booked!!!</p>
        <button class="button" v-bind:class="{ disabledButton: tickets[1]==0 }" v-on:click="bookTicketDelhi">Book Ticket
        </button>
      </li>
      <li>
        <h3>Jaipur</h3>
        <p v-if="tickets[2] > 0">Tickets Available: {{tickets[2]}}</p>
        <p v-else>All Tickets Booked!!!</p>
        <button class="button" v-bind:class="{ disabledButton: tickets[2]==0 }" v-on:click="bookTicketJaipur">Book Ticket
        </button>
      </li>
    </ul>
    
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null,
      tickets: [1,2,3],
      poster: 'https://image.tmdb.org/t/p/w342'
    }
  },
  methods: {
    bookTicketNoida(){
      if(this.tickets[0] > 0){
        this.tickets[0] -=1
      }
    },
    bookTicketDelhi(){
      if(this.tickets[1] > 0){
        this.tickets[1] -=1
      }
    },
    bookTicketJaipur(){
      if(this.tickets[2] > 0){
        this.tickets[2] -=1
      }
    }
  },
  computed: {
    image(){
      return this.poster + this.event.poster_path
    }
  },
  created() {
    // fetch event and set local event data
    EventService.getEvent(this.id)
	  .then(response => {
		  this.event = response.data
      //console.log(response.data)
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
  cursor: pointer;
}
.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}
</style>
