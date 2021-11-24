<template>
<div class="card border-danger mb-3 error" style="max-width: 18rem;">
  <div class="card-header">Error</div>
  <div class="card-body text-danger">
    <h5 class="card-title">Oops! There was an error</h5>
    <p class="card-text">{{ error }}</p>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        computed:{
            ...mapState(['error'])
        }
    }
</script>

<style>
    .error{
        margin: auto;
    }
</style>
