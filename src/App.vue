<template>
  <div>
    <header>
    </header>

    <auth />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Auth from './views/Auth.vue'

export default {
  name: 'App',
  components: {
    RouterLink,
    Auth,
  },
  methods: {
    handleLogout() {
      this.$supabase.auth.signOut()
        .then(() => {
          this.$router.push('/auth/login');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
}
</script>

<style scoped>
</style>
