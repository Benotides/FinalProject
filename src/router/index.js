import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth/Auth.vue";
import Home from "../views/Home.vue";
import SignIn from "../views/Auth/SignIn.vue";
import SignUp from "../views/Auth/SignUp.vue";

const routes = [
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    children: [
      { path: "login", component: SignIn },
      { path: "sign-up", component: SignUp },
    ],
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
