<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <RouterLink to="/src/components/NewTask.vue">Tasks</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: "Nav",
  components: {
    RouterLink
  }
}
</script>

<style scoped>
nav {
  background-color: #333;
  overflow: hidden;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>
