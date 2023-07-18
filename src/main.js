import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router configuration from the router directory
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router, // Set the router instance
  store,
  render: (h) => h(App),
}).$mount("#app");
