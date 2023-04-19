<template>
  <form @submit.prevent="signUp" class="sign-up-form">
    <div class="form-group">
      <label for="name" class="form-label">Name</label>
      <input type="text" id="name" v-model="name" class="form-input" required>
    </div>
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input type="email" id="email" v-model="email" class="form-input" required>
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Password</label>
      <input type="password" id="password" v-model="password" class="form-input" required>
    </div>
    <button type="submit" class="form-button">Sign Up</button>
    <div v-if="error" class="form-error">{{ error }}</div>
  </form>
</template>
  
  <script>
  import { supabase } from '@/supabase/index.js';
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        error: null,
      };
    },
    methods: {
      async signUp() {
        try {
          const { user, error } = await supabase.auth.signUp({
            email: this.email,
            password: this.password,
          });
          if (error) throw error;
          await supabase.from('users').insert([{ name: this.name, email: this.email }]);
          this.$store.commit('user/setUser', user);
          this.$router.push({ name: 'Home' });
        } catch (error) {
          console.error(error);
          this.error = error.message;
        }
      },
    },
  };
  </script>
  <style scoped>
@import url('https://fonts.googleapis.com/css?family=Aniron&display=swap');

.sign-up-form {
  font-family: 'Aniron', sans-serif;
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


  

