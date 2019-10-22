<template>
<b-form class="form-login">
  <h1 class="h3 mb-5 font-weight-normal center">LOGIN</h1>
  <b-input-group class="mb-2 mr-sm-2 mb-sm-4">
    <b-input-group-prepend is-text>
      <v-icon name="at"/>
    </b-input-group-prepend>
    <b-input id="inline-form-input-email" placeholder="Email" required></b-input>
  </b-input-group>
  <b-input-group class="mb-2 mr-sm-2 mb-sm-4">
    <b-input-group-prepend is-text>
      <v-icon name="key"/>
    </b-input-group-prepend>
    <b-input id="inline-form-input-password" placeholder="Password" required></b-input>
  </b-input-group>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <b-button class="btn btn-lg btn-primary btn-block mb-3" type="submit" to="Home">Login</b-button>
  <div id="forgotten-password">
    <b-link href="#foo">Forgotten password</b-link>
  </div>
</b-form>
</template>

<script>
export default {
  name: "Login"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}

main {
  display: flex;
}

.form-login {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 150px auto;

    background-color: #ffca2a;
}

#forgotten-password {
  text-align: center;
}
</style>
