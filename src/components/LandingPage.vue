<template>
<main>
  <div id="slogan">
    <h1 class="display-3">WELCOME TO FOOTBALL TRAINING MANAGER !!!</h1>
    <p>The best application to manage your youth team and senior team.</p>
    <p>
      <login-button class="btn-lg"></login-button>
      <signup-button class="btn-lg"></signup-button>
    </p>
  </div>
  <div class="container">
    <b-card-group deck>
      <b-card title="Automatique update" img-src="https://placekitten.com/g/300/300" img-alt="Image" img-top>
      </b-card>

      <b-card title="Graphic visualisation" img-src="https://placekitten.com/g/300/300" img-alt="Image" img-top>
      </b-card>

      <b-card title="Training priority" img-src="https://placekitten.com/g/300/300" img-alt="Image" img-top>
      </b-card>
    </b-card-group>
  </div>
</main>
</template>

<script>
import LoginButton from "./button/LoginButton";
import SignupButton from "./button/SignupButton";

export default {
  name: "LandingPage",
  components: {LoginButton, SignupButton}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#slogan {
  padding: 3rem 1.5rem;
  text-align: center;
}

.card-body {
  text-align: center;

  background-color: #ffca2a;
  color: #356933;
}
</style>
