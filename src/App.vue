<template>
<header>
</header>

<div>

    <Auth />
</div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import UserStore from '@/stores/user';
import Auth from '@/views/Auth/Auth.vue';

export default {
  name: 'App',
  components: {
    Auth,
  },
  computed: {
...mapState(UserStore, ['user'])
  },

  methods: {
    ...mapActions(UserStore, ['fetchUser']),
    checkUserExists() {
      console.log(this.user)
      if (this.user) {
        this.$router.push({ path:'/'});
      } else {
        this.$router.push({path:'/auth/sign-in'});
      }
      }
    },

  async created() {
try {
  await this.fetchUser();
} catch (e) {
  console.error(e);
  this.checkUserExists()

}
},
watch: {
user() {
  if (this.user)
 {
  this.$router.push({path:'/'});
 } else {
  this.$router.push({path:'/Auth/Sign-in'});
 }
 }}
}


</script>

<style scoped>
</style>
