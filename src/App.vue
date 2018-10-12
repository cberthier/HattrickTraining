<template>
  <div id="app">  
    <hattrick-header></hattrick-header>
    <div class="row">
      <hattrick-side-bar></hattrick-side-bar>
      <main class="col-md-9 ml-sm-auto col-lg-10 px-4 ht-content" role="main">
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-awesome/icons';

import HattrickHeader from "./components/HattrickHeader";
import HattrickSideBar from "./components/HattrickSideBar";
import Home from "./components/Home";
import PlayerDetails from "./components/PlayerDetails.vue";
import PlayerList from "./components/PlayerList.vue";

export default {
  name: "App",
  components: {
    HattrickHeader, HattrickSideBar, Home, PlayerDetails, PlayerList
  }
};
</script>

<style>
#app {
  //font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
}

[role="main"] {
  padding-top: 48px;
}
body {
  background-color: #356933;
  color: #FFFFFF;
}

.list-group .list-group-item {
  background-color: #356933;
  color: #FFFFFF;
}

</style>
