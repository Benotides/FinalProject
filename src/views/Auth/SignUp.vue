<template>
  <div class="sign-up-form">
    <h1 class="sign-up-heading">Sign Up</h1>
  
    <form>
      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" class="form-input" v-model="name">
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email:</label>
        <input class="form-input" type="email" name="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password:</label>
        <input class="form-input" type="password" name="password" id="password" v-model="password" required>
      </div>
      <button class="form-button" @click.prevent="handleSignUp">Sign Up</button>
    </form>
    <div v-if="error" class="form-error">{{ error }}</div>
    <router-link to="/SignUp">Already have an account? Sign In</router-link>

  </div>
</template>

<script>
  import { mapState, mapActions } from 'pinia';
  import userStore from '@/stores/user';

  export default {
    name: 'SignUp',
    data() {
      return {
        email: '',
        password: '',
        error: null
      };
    },
    computed: {
      ...mapState(userStore, ['user']),
    },
    methods: {
      ...mapActions(userStore, ['signUp']),
      async handleSignUp() {
        try {
          await this.signUp(this.email, this.password);
          this.$router.push("/");
        } catch (err) {
          this.error = err.message;
        }
      }
    }
  };
</script>

<style scoped>
  .sign-up-form {
    font-family: sans-serif;
    color: #fff;
    background-color: rgb(42, 61, 8);
    padding: 20px;
    border-radius: 10px;
    width: 40%;
  }

  .sign-up-heading {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 30px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    font-size: 1rem;
    display: block;
    margin-bottom: 10px;
  }

  .form-input {
    font-size: 1rem;
    padding: 10px;
    width: 80%;
    height: 20px;
    border-radius: 5px;
    border: none;
    background-color: #6d6d6d;
    color: #fff;
  }

  .form-button {
    font-size: 1.5rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #8d6e63;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .form-button:hover {
    background-color: #795548;
  }

  .form-error {
    font-size: 1.5rem;
    color: #ff6347;
    margin-top: 20px;
    text-align: center;
  }
</style>