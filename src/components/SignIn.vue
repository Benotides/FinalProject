<template>
<div class="sign-in-form">

    <form @submit.prevent="signIn">
        <label>
            Email:
            <input type="email" v-model="email" required>
        </label>
        <br>
        <label>
            Password:
            <input type="password" v-model="password" required>
        </label>
        <br>
        <button type="submit">Sign In</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
</div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase/index.js'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const signIn = async () => {
      const { user, session, error: signInError } = await supabase.auth.signIn({
        email: email.value,
        password: password.value,
      })
      if (signInError) {
        error.value = signInError.message
      }
      console.log(user, session, error.value)
    }

    const isAuthenticated = () => {
      return !!supabase.auth.session()
    }

    return {
      email,
      password,
      error,
      signIn,
      isAuthenticated,
    }
    
  },
}
</script>




<style scoped>


.sign-in-form {
    font-family:sans-serif;
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
    font-size: 1.rem;
    display: block;
    margin-bottom: 10px;
}

.sign-in-form input {
    font-size: 1.rem;
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
}

input {
    width: 40%;

}

label {
    width: 80%;
}
</style>
