<template>
  <div class="loginForm">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
      </div>
 
      <button type="submit" class="btn btn-primary">Login</button>
      <p v-if="error!=null">{{ error }}</p>
      <div>
        <router-link to="/register">
          Don't have an account? Register.
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
        error: null
      }
    },
    methods: {
    login () {
      this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'EventList' })
        })
        .catch(err => {
          this.error = err.response.data.error
          console.log(err.response.data.error)
        })
    }
  }
  }    
</script>
<style scoped>
  p{
    color: red;
  }
  .loginForm{
    margin: auto;
    width: 30%;
  }
</style>
