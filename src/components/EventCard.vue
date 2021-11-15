<template>
  <router-link class="event-link" :to="{ name: 'EventDetails', params: { id: event.id } }">
  <div class="event-card">
    <!-- Display event data  -->
    <img v-bind:src="image" alt="movie-poster">
    <h4>{{ event.original_title }}</h4>
    <p><strong>overview: </strong> {{ event.overview }}</p>
    <p><strong>votes: </strong> {{event.vote_count}}</p>
    <!-- <span>{{ event.genres[0].name }}</span> -->
  
  </div>
</router-link>
</template>

<script>
export default {
     props: {
     event: {
       type: Object,
       required: true
     }
   },
   data(){
     return {
       poster: 'https://image.tmdb.org/t/p/w154'
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
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
