<template>
  <b-navbar toggleable="lg" type="dark" fixed="top" class="ht-header">
    <b-navbar-brand href="#" to="LandingPage">Football Training Manager</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <login-button></login-button>
          <signup-button></signup-button>
        </b-nav-form>

        <b-nav-item-dropdown right text="User">
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import LoginButton from "@/components/button/LoginButton";
import SignupButton from "@/components/button/SignupButton";

export default {
  name: "NavBar",
  components: {LoginButton, SignupButton}
};
</script>

<style scoped>
.ht-header {
  background-color: #ffca2a;
}

.ht-header a,
.ht-header button {
  color: #356933;
}
</style>
