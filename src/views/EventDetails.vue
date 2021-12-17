<template>
  <div v-if="event && loggedIn" >
   
    <div class="card mb-3" style="max-width: 90%;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img v-bind:src="image" alt="movie-poster">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h1 class="card-title">{{ event.original_title }}</h1>
            <p class="card-text"><strong>Popularity:</strong> {{ event.popularity }}</p>
            <p class="card-text"><strong>Number of Votes:</strong> {{ event.vote_count }}</p>
            <p class="card-text"><strong>Votes Average:</strong> {{ event.vote_average }}</p>
            <p class="card-text"><strong>Release Date:</strong> {{ event.release_date }}</p>
            <p class="card-text"><strong>Runtime:</strong> {{ Math.floor(event.runtime/60) +'hr ' + event.runtime%60 + 'min' }}</p>
            <p class="card-text"><strong>Production Companies:</strong> <span v-for="pc in event.production_companies" :key="pc.id">{{ pc.name + ', ' }}</span></p>
            <p class="card-text"><strong>Genres:</strong> <span v-for="genre in event.genres" :key="genre.id">{{ genre.name + ', ' }}</span></p> 
          </div>
        </div>
      </div>
    </div>
    <div class="movie-ticket-details">
      <h2>About the movie</h2>
      <p class="movie-overview">{{ event.overview }}</p>
      <h2>Cinema Halls</h2>
      <ul class="Halls-list">
        
        <li>
          <div class="movie-form">
            <div class="movie-hall">
              <h3>Noida</h3>
              <p v-for="(cinemaHall, i) in availability[0].cinemaHalls" :key="i">{{ cinemaHall.Hall }} 
                <span v-for="(MovieTime, ind) in cinemaHall.MovieTimes" :key="ind">
                  <button v-on:click="bookTicketNoida(MovieTime.slot, cinemaHall.Hall)">{{ MovieTime.slot + ' : '+ MovieTime.tickets}}</button> 
                </span> 
              </p>

              <p v-if="availability[0].tickets > 0">Total Tickets Available: {{ availability[0].tickets }}</p>
              <p v-else>All Tickets Booked!!!</p> 
            </div>
            <div class="form" @submit.prevent="onNoidaSubmit" v-show="Noidaform==true">
              <form>
                <div>
                  <label>Name:</label>
                  <input class="input-field" type="text" v-model="name" placeholder="Enter your name" required>
                </div>
                <div>
                  <label>Mobile Number:</label>
                  <input type="tel" v-model="number" placeholder="Enter your number" pattern="[0-9]{10}" required>
                </div>
                <div><input class="button" type="submit" value="Submit"></div>
              </form>
            </div>
            

            <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
              <div class="card text-white bg-success mb-3 ticket-width" style="max-width: 30rem;" v-show="bookedNoidaTicket.length!=0 && NoidaTicket==true">
                <div class="card-header">Movie Ticket</div>
                <div class="card-body">
                <h5 class="card-title"><strong>Movie: </strong>{{ event.original_title }}</h5>
                <h5><strong>Place: </strong>Noida</h5>
                <strong>Name: </strong>{{ name }}
                <strong>Mob. No.: </strong>{{ number }}
                <p class="card-text" v-for="(ticket, index) in bookedNoidaTicket" :key="index"> <strong>Hall:</strong> {{ ticket.bookedHall }} <strong>Time:</strong> {{ ticket.bookedSlot }}</p>
              </div>
            </div>
            </transition>
         
          </div>
        
  
        </li>

        <li>
          <div class="movie-form">
              <div class="movie-hall">
          <h3>Delhi</h3>
            <p v-for="(cinemaHall, i) in availability[1].cinemaHalls" :key="i">{{ cinemaHall.Hall }} 
            <span v-for="(MovieTime, ind) in cinemaHall.MovieTimes" :key="ind">
              <button v-on:click="bookTicketDelhi(MovieTime.slot, cinemaHall.Hall)">{{ MovieTime.slot + ' : '+ MovieTime.tickets}}</button> 
            </span>
          </p>
          <p v-if="availability[1].tickets > 0">Total Tickets Available: {{ availability[1].tickets }}</p>
          <p v-else>All Tickets Booked!!!</p> 
              </div>

          <div class="form" @submit.prevent="onDelhiSubmit" v-show="Delhiform==true"><form>
            <div>
              <label>Name:</label>
              <input class="input-field" type="text" v-model="name" placeholder="Enter your name" required>
            </div>
            <div>
              <label>Mobile Number:</label>
              <input type="tel" v-model="number" placeholder="Enter your number" pattern="[0-9]{10}" required>
            </div>
            <div><input class="button" type="submit" value="Submit"></div>
          </form>
          </div>

         
      <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
      <div class="card text-white bg-success mb-3 ticket-width" style="max-width: 30rem;" v-show="bookedDelhiTicket.length!=0 && DelhiTicket==true">
        <div class="card-header">Movie Ticket</div>
        <div class="card-body">
          <h5 class="card-title"><strong>Movie: </strong>{{ event.original_title }}</h5>
          <h5><strong>Place: </strong>Delhi</h5>
          <strong>Name: </strong>{{ name }}
          <strong>Mob. No.: </strong>{{ number }}
          <p class="card-text" v-for="(ticket, index) in bookedDelhiTicket" :key="index"> <strong>Hall:</strong> {{ ticket.bookedHall }} <strong>Time:</strong> {{ ticket.bookedSlot }}</p>
        </div>
      </div>
      </transition>
          </div>
        </li>

        <li>
          <div class="movie-form">
              <div class="movie-hall">
          <h3>Jaipur</h3>
            <p v-for="(cinemaHall, i) in availability[2].cinemaHalls" :key="i">{{ cinemaHall.Hall }} 
            <span v-for="(MovieTime, ind) in cinemaHall.MovieTimes" :key="ind">
              <button v-on:click="bookTicketJaipur(MovieTime.slot, cinemaHall.Hall)">{{ MovieTime.slot + ' : '+ MovieTime.tickets}}</button> 
            </span>
          </p>
          <p v-if="availability[2].tickets > 0">Total Tickets Available: {{ availability[2].tickets }}</p>
          <p v-else>All Tickets Booked!!!</p> 
              </div>

          <div class="form" @submit.prevent="onJaipurSubmit" v-show="Jaipurform==true">
            <form>
            <div>
              <label>Name:</label>
              <input class="input-field" type="text" v-model="name" placeholder="Enter your name" required>
            </div>
            <div>
              <label>Mobile Number:</label>
              <input type="tel" v-model="number" placeholder="Enter your number" pattern="[0-9]{10}" required>
            </div>
            <div><input class="button" type="submit" value="Submit"></div>
          </form>
          </div>

        
       <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
        <div class="card text-white bg-success mb-3 ticket-width" style="max-width: 30rem;" v-show="bookedJaipurTicket.length!=0 && JaipurTicket==true">
        <div class="card-header">Movie Ticket</div>
        <div class="card-body">
          <h5 class="card-title"><strong>Movie: </strong>{{ event.original_title }}</h5>
          <h5><strong>Place: </strong>Jaipur</h5>
          <strong>Name: </strong>{{ name }}
          <strong>Mob. No.: </strong>{{ number }}
          <p class="card-text" v-for="(ticket, index) in bookedJaipurTicket" :key="index"> <strong>Hall:</strong> {{ ticket.bookedHall }} <strong>Time:</strong> {{ ticket.bookedSlot }}</p>
        </div>
      </div>
  </transition>
          </div>
        </li>
      </ul>
    </div>
   
     

     

     
     
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import gsap from 'gsap';
export default {
 
  props: ['id'],
  data() {
    return {
    
      availability: [
        {city: 'Noida',
          cinemaHalls: [
            { Hall: 'Sargam Hall', MovieTimes: [{ slot: '10:00 AM', tickets: 1},
             { slot: '12:30 PM', tickets: 2}, {slot: '9:00 PM', tickets: 2}]},
            { Hall: 'Amba Cinema', MovieTimes: [{ slot: '10:00 AM', tickets: 1},
             { slot: '12:30 PM', tickets: 1}, {slot: '9:00 PM', tickets: 2}]},
            { Hall: 'Walkway Mall', MovieTimes: [{ slot: '10:00 AM', tickets: 2},
             { slot: '12:30 PM', tickets: 1}, {slot: '9:00 PM', tickets: 1}]}
          ],
          tickets: 13
        },
        {
          city: 'Delhi',
          cinemaHalls: [
            { Hall: 'Mega Mall', MovieTimes: [{ slot: '10:00 AM', tickets: 1}, 
            {slot:'12:30 PM', tickets: 2},{slot: '9:00 PM', tickets: 1}]},
            { Hall: 'Star Mall', MovieTimes: [{slot: '10:00 AM',tickets: 1},
            {slot: '12:30 PM', tickets: 1}, {slot: '9:00 PM', tickets: 2}]}
          ],
          tickets: 8
        },
        {
          city: 'Jaipur',
          cinemaHalls: [
            { Hall: 'Vishal Multiplex', MovieTimes: [{slot: '10:00 AM', tickets: 2},
             {slot: '12:30 PM', tickets: 2}, {slot: '9:00 PM', tickets: 1}]},
            { Hall: 'Elite Hall', MovieTimes: [{slot: '10:00 AM', tickets: 3}, 
            {slot: '12:30 PM', tickets: 2}, {slot: '9:00 PM', tickets: 1}] }
          ],
          tickets: 11
        }
      ],
      poster: 'https://image.tmdb.org/t/p/w342',
      
      time: '',
      hall: '',
      bookedNoidaTicket: [],
      bookedDelhiTicket: [],
      bookedJaipurTicket: [],
      Noidaform: false, NoidaTicket: false,
      Delhiform: false, DelhiTicket: false,
      Jaipurform: false, JaipurTicket: false,
    
      name: '',
      number: null
    }
  },
   methods: {
   
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0,0)'
    },
    enter(el, done) {
      gsap.to(el, {
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: 'bounce.out',
      onComplete: done
      })
    },
    onNoidaSubmit(){
        let time = this.time
         if(this.hall=='Sargam Hall'){
           var e = this.availability[0].cinemaHalls[0].MovieTimes.find(function (element) {
             return element.slot == time
           })
           console.log(e)
           if(e.tickets > 0){
             e.tickets -=1
             this.Noidaform = false
            this.NoidaTicket = true
            if(this.availability[0].tickets > 0){
         this.availability[0].tickets -=1}
           }
         }


         time = this.time
         if(this.hall=='Amba Cinema'){
            e = this.availability[0].cinemaHalls[1].MovieTimes.find(function (element) {
             return element.slot == time
           })
           console.log(e)
           if(e.tickets > 0){
             e.tickets -=1
             this.Noidaform = false
            this.NoidaTicket = true
            if(this.availability[0].tickets > 0){
         this.availability[0].tickets -=1}
           }
         }


        time = this.time
         if(this.hall=='Walkway Mall'){
            e = this.availability[0].cinemaHalls[2].MovieTimes.find(function (element) {
             return element.slot == time
           })
           console.log(e)
           if(e.tickets > 0){
             e.tickets -=1
             this.Noidaform = false
            this.NoidaTicket = true
            if(this.availability[0].tickets > 0){
         this.availability[0].tickets -=1}
           }
         }
    },
    onDelhiSubmit(){

      let time = this.time
         if(this.hall=='Mega Mall'){
           var e = this.availability[1].cinemaHalls[0].MovieTimes.find(function (element) {
             return element.slot == time
           })
           console.log(e)
           if(e.tickets > 0){
             e.tickets -=1
             this.DelhiTicket = true
             this.Delhiform = false
            if(this.availability[1].tickets > 0){
         this.availability[1].tickets -=1}
           }
         }
      

        time = this.time
         if(this.hall=='Star Mall'){
            e = this.availability[1].cinemaHalls[1].MovieTimes.find(function (element) {
             return element.slot == time
           })
           console.log(e)
           if(e.tickets > 0){
             e.tickets -=1
             this.DelhiTicket = true
             this.Delhiform = false
            if(this.availability[1].tickets > 0){
         this.availability[1].tickets -=1}
           }
         }

    },
    onJaipurSubmit(){

      let time = this.time
         if(this.hall=='Vishal Multiplex'){
            var e = this.availability[2].cinemaHalls[0].MovieTimes.find(function (element) {
             return element.slot == time
           })
           console.log(e)
           if(e.tickets > 0){
             e.tickets -=1
             this.JaipurTicket = true
            this.Jaipurform = false
            if(this.availability[2].tickets > 0){
         this.availability[2].tickets -=1}
           }
         }
      

       time = this.time
         if(this.hall=='Elite Hall'){
             e = this.availability[2].cinemaHalls[1].MovieTimes.find(function (element) {
             return element.slot == time
           })
           console.log(e)
           if(e.tickets > 0){
             e.tickets -=1
             this.JaipurTicket = true
            this.Jaipurform = false
            if(this.availability[2].tickets > 0){
         this.availability[2].tickets -=1}
           }
         }

    },
     bookTicketNoida(time, hall){
       if(this.availability[0].tickets > 0){
       
        this.Noidaform = true
        this.NoidaTicket = false
          this.time = time
          this.hall = hall
          
         if(this.bookedNoidaTicket.length!=0){
           this.bookedNoidaTicket.pop()
         }
         this.bookedNoidaTicket.push({ bookedHall: hall, bookedSlot: time}) 
         
        
       }
       console.log(time, hall)
     },
     bookTicketDelhi(time, hall){
       if(this.availability[1].tickets > 0){
        
        this.Delhiform = true
        this.DelhiTicket = false
        
          this.time = time
          this.hall = hall
         if(this.bookedDelhiTicket.length!=0){
           this.bookedDelhiTicket.pop()
         }
         this.bookedDelhiTicket.push({ bookedHall: hall, bookedSlot: time}) 
       }
       console.log(time, hall)
     },
     bookTicketJaipur(time, hall){
       if(this.availability[2].tickets > 0){
       
        this.Jaipurform = true
        this.JaipurTicket = false
       
          this.time = time
          this.hall = hall
         if(this.bookedJaipurTicket.length!=0){
           this.bookedJaipurTicket.pop()
         }
         this.bookedJaipurTicket.push({ bookedHall: hall, bookedSlot: time})
       }
       console.log(time, hall)
     },
   },
  computed: {
    image(){
      return this.poster + this.event.poster_path
    },
    ...mapState(['event']),
    ...mapGetters(['loggedIn'])
    
  },
  mounted() {
    this.$store.dispatch('fetchEvent', this.$route.params.id)
    .catch( error => {
      this.$store.commit('SET_ERROR', error)
       this.$router.push({
        name: 'ErrorDisplay',
      //   params: { error: error }
       })
    })
    
  }
}
</script>

<style scoped> 
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

.movie-ticket-details{
  margin-left: 10px;
  /* display: flex;
  flex-direction: column; */
  /* border: solid 1px; */
}
.movie-overview{
  margin: 20px;
  margin-right: 30%;
}

.card-body{
  margin-left: 40px;
}
.card{
  margin-left: 50px; 
  padding: 4px;
}


.movie-form{
  display: flex;
  /* border: solid 1px; */
}
.movie-hall{
  /* border: solid 1px; */
  width: 50%;
}
.form{
  /* border: solid 1px; */
  margin-left: 30px;
}
.input-field{
  margin-left: 65px;
}
</style>
