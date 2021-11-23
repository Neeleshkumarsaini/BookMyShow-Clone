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
          <li>
            <h3>Noida</h3>
            <p v-for="(cinemaHall, i) in availability[0].cinemaHalls" :key="i">{{ cinemaHall.Hall }} 
            <span v-for="(MovieTime, ind) in cinemaHall.MovieTimes" :key="ind">
              <button v-on:click="bookTicketNoida(MovieTime, cinemaHall.Hall)">{{ MovieTime + ' '}}</button> 
            </span>
          </p>
          <p v-if="availability[0].tickets > 0"> Tickets Available: {{ availability[0].tickets }}</p>
          <p v-else>All Tickets Booked!!!</p>
        </li>

        <li>
          <h3>Delhi</h3>
            <p v-for="(cinemaHall, i) in availability[1].cinemaHalls" :key="i">{{ cinemaHall.Hall }} 
            <span v-for="(MovieTime, ind) in cinemaHall.MovieTimes" :key="ind">
              <button v-on:click="bookTicketDelhi(MovieTime, cinemaHall.Hall)">{{ MovieTime + ' '}}</button> 
            </span>
          </p>
          <p v-if="availability[1].tickets > 0"> Tickets Available: {{ availability[1].tickets }}</p>
          <p v-else>All Tickets Booked!!!</p> 
        </li>

        <li>
          <h3>Jaipur</h3>
            <p v-for="(cinemaHall, i) in availability[2].cinemaHalls" :key="i">{{ cinemaHall.Hall }} 
            <span v-for="(MovieTime, ind) in cinemaHall.MovieTimes" :key="ind">
              <button v-on:click="bookTicketJaipur(MovieTime, cinemaHall.Hall)">{{ MovieTime + ' '}}</button> 
            </span>
          </p>
          <p v-if="availability[2].tickets > 0"> Tickets Available: {{ availability[2].tickets }}</p>
          <p v-else>All Tickets Booked!!!</p> 
        </li>
      </ul>
    </div>
      <div class="ticket" v-show="bookedTicket.length!=0">
        <h4>Movie Ticket</h4>
        <p v-for="(ticket, index) in bookedTicket" :key="index"><strong>Name:</strong> {{ user }} <strong>Hall:</strong> {{ ticket.bookedHall }} <strong>Time:</strong> {{ ticket.bookedSlot }}</p>
      </div>
  </div>
</template>

<script>
// import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      // event: null,
      user: '',
      availability: [
        {city: 'Noida',
          cinemaHalls: [
            { Hall: 'Sargam Hall', MovieTimes: ['10:00 AM', '12:30 PM', '9:00 PM']},
            { Hall: 'Amba Cinema', MovieTimes: ['10:00 AM', '1:00 PM', '9:00 PM']},
            { Hall: 'Walkway Mall', MovieTimes: ['9:00 AM', '2:30 PM', '7:00 PM']}
          ],
          tickets: 6
        },
        {
          city: 'Delhi',
          cinemaHalls: [
            { Hall: 'Mega Mall', MovieTimes: ['10:00 AM', '12:30 PM', '9:00 PM']},
            { Hall: 'Star Mall', MovieTimes: ['10:00 AM', '12:30 PM', '9:00 PM']}
          ],
          tickets: 7
        },
        {
          city: 'Jaipur',
          cinemaHalls: [
            { Hall: 'Vishal Multiplex', MovieTimes: ['10:00 AM', '12:30 PM', '9:00 PM']},
            { Hall: 'Elite Hall', MovieTimes: ['10:00 AM', '12:30 PM', '9:00 PM'] }
          ],
          tickets: 8
        }
      ],
      poster: 'https://image.tmdb.org/t/p/w342',
      bookedTicket: []
    }
  },
   methods: {
     bookTicketNoida(time, hall){
       if(this.availability[0].tickets > 0){
         this.availability[0].tickets -=1
         this.user = this.$store.state.user
         this.bookedTicket.push({ name: this.user, bookedHall: hall, bookedSlot: time}) 
         
          console.log(this.user)
       }
       console.log(time, hall)
     },
     bookTicketDelhi(time, hall){
       if(this.availability[1].tickets > 0){
         this.availability[1].tickets -=1
         this.user = this.$store.state.user
         this.bookedTicket.push({name: this.user, bookedHall: hall, bookedSlot: time})
       }
       console.log(time, hall)
     },
     bookTicketJaipur(time, hall){
       if(this.availability[2].tickets > 0){
         this.availability[2].tickets -=1
         this.user = this.$store.state.user
         this.bookedTicket.push({name: this.user, bookedHall: hall, bookedSlot: time})
       }
       console.log(time, hall)
     },
   },
  computed: {
    image(){
      return this.poster + this.event.poster_path
    },
    event(){
      return this.$store.state.event
    }
  },
  mounted() {
    this.$store.dispatch('fetchEvent', this.$route.params.id)
    .catch( error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
    // fetch event and set local event data
    // EventService.getEvent(this.$route.params.id)
	  // .then(response => {
		//   this.event = response.data
    //   //console.log(response.data)
	  // })
	  // .catch(error => {
		//   console.log(error)
	  // })
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
.ticket{
  border: 1px solid;
  border-radius: 5px;
  margin: 10px;
  margin-right: 60%;
  padding: 5px;
  padding-left: 50px;
  background-color: #92a8d1;
}
</style>
