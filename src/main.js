// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueAwesome from "vue-awesome/components/Icon";
import VueRouter from "vue-router";
import App from "./App";
import Home from "./components/Home.vue";
import PlayerDetails from "./components/PlayerDetails.vue";
import PlayerList from "./components/PlayerList.vue";

Vue.config.productionTip = false;

Vue.component("v-icon", VueAwesome);

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: "/home", component: Home },
  { path: "/playerDetails", component: PlayerDetails },
  { path: "/playerList", component: PlayerList }
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
