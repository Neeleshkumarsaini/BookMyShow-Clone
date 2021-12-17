<template>
      
  <div class="registerForm">
    <h1>Register</h1>
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
      <ul v-if="errors!==null" class="errors">
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
  </div>
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
  .registerForm{
    margin: auto;
    width: 30%;
    padding: 2%;
    /* transform: scale(1.01); */
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
</style>
