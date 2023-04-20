<template>
  <div class="sign-in-form">
    <h1>Sign In</h1>
   
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" />
    <button @click="signUp">Sign In</button>
    <p class="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import userStore from '@/stores/user'
import { mapState, mapActions } from 'pinia';

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const signUp = async () => {
      try {
        console.log(`Name: ${name.value}, Email: ${email.value}, Password: ${password.value}`)
      } catch (e) {
        error.value = e.message
      }
    }

    return {
      name,
      email,
      password,
      error,
      signUp,
    }
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
}
</script>

<style scoped>
  .sign-in-form {
    font-family: sans-serif;
    color: #fff;
    background-color: rgb(42, 61, 8);
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 40%;
  }

  .sign-in-form h1 {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .sign-in-form label {
    font-size: 1rem;
    display: block;
    margin-bottom: 10px;
  }

  .sign-in-form input {
    font-size: 1rem;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: none;
    background-color: #6d6d6d;
    color: #fff;
  }

  .sign-in-form button {
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #8d6e63;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .sign-in-form button:hover {
    background-color: #795548;
  }

  .sign-in-form .error {
    font-size: 1.5rem;
    color: #ff0000;
  }
</style>
