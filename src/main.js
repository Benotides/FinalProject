import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Auth from './views/Auth.vue'

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);

app.component('auth', Auth);

app.mount('#app');
