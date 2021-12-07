<template>
    
      <form @submit.prevent="register">
      <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
    </div>
 
    <button type="submit" class="btn btn-primary">Register</button>
    <ul class="errors">
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
    </ul>
    <div>
    <router-link to="/login">
        Already have an account? Login.
      </router-link>
    </div>  
    </form>
</template>
    
<script>
  export default{
    data(){
      return {   
        email: '',
        password: '',
        errors: null
      }
    },
    methods: {
      register () {
        this.$store.dispatch('register', {  email: this.email, password: this.password })
        .then(() => {
          this.$router.push({ name: 'EventList' })
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
      }
    }
  }    
</script>

<style scoped>
  .errors{
    color: red;
  }
</style>
