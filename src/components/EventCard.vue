<template>
  <router-link class="event-link" :to="{ name: 'EventDetails', params: { id: event.id } }">
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <div class="card">
    <img v-bind:src="image" class="card-img-top" alt="movie-poster">
    <div class="card-body">
      <p class="card-text">{{ event.original_title }}</p>
    </div>
    </div>
  </transition>
  
</router-link>
</template>

<script>
import gsap from 'gsap'
export default {
     props: {
     event: {
       type: Object,
       required: true
     },
   
   },
   data(){
     return {
       poster: 'https://image.tmdb.org/t/p/w342'
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
      onComplete: done
      })
    }
  },

   computed: {
    image(){
      return this.poster + this.event.poster_path
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .card {
  padding: 5px;
  /* width: 200px; */
  height: 510px;
  
  margin: 9px;
  margin-left: 30px;
  width: 18rem;
}
.card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
