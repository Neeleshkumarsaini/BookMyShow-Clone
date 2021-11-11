<template>
  <router-link to="/event/123">
  <div class="event-card">
    <!-- Display event data  -->
 
    <h4>{{ event.original_title }}</h4>
    <p><strong>overview: </strong> {{ event.overview }}</p>
    <p><strong>votes: </strong> {{event.vote_count}}</p>
  
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
</style>
