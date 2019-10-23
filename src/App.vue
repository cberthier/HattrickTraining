<template>
  <div id="app">
    <nav-bar></nav-bar>
    <main class="col-md-12 ml-sm-auto col-lg-12 px-4 ht-content" role="main">
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-awesome/icons';

import NavBar from "./components/layout/NavBar";
import FooterBar from "./components/layout/FooterBar";

export default {
  name: "App",
  components: {
    NavBar, FooterBar
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #356933;
  color: #FFFFFF;

  padding-top: 5rem;
}

.list-group .list-group-item {
  background-color: #356933;
  color: #FFFFFF;
}

</style>
