import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/login-form.vue"; // Changed to "Login" with PascalCase
import Register from "../views/register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login", // Corrected the path for login
    name: "Login", // Changed to PascalCase
    component: Login,
  },
  {
    path: "/register",
    name: "Register", // Changed to PascalCase
    component: Register,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
