// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueAwesome from "vue-awesome/components/Icon";
import VueRouter from "vue-router";
import App from "./App";
import LandingPage from "./components/LandingPage.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Home from "./components/Home.vue";
import SeniorPlayerDetails from "./components/seniorTeam/SeniorPlayerDetails.vue";
import SeniorPlayerList from "./components/seniorTeam/SeniorPlayerList";
import YouthPlayerList from "./components/youthTeam/YouthPlayerList";
import YouthPlayerDetails from "./components/youthTeam/YouthPlayerDetails";

Vue.config.productionTip = false;

Vue.component("v-icon", VueAwesome);

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing Page",
    component: LandingPage
  },
  {
    path: "/login",
    name: "Login Page",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup Page",
    component: Signup
  },
  {
    path: "/home",
    name: "Home Page",
    component: Home
  },
  {
    path: "/seniorTeam/playerList",
    name: "Player List Page",
    component: SeniorPlayerList
  },
  {
    path: "/seniorTeam/playerDetails",
    name: "Player Details Page",
    component: SeniorPlayerDetails
  },
  {
    path: "/youthTeam/playerList",
    name: "Player List Page",
    component: YouthPlayerList
  },
  {
    path: "/youthTeam/playerDetails",
    name: "Player Details Page",
    component: YouthPlayerDetails
  }
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
});
