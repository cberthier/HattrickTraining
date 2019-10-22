<template>
  <b-card class="card-action">
    <h2 class="card-title">{{title}}</h2>
    <div class="logo">
      <v-icon :name="logo" scale="4"/>
    </div>
    <p class="card-description">{{description}}</p>
    <b-button variant="primary">Show Team</b-button>
  </b-card>
</template>

<script>
export default {
  name: "ActionCard",
  props: ['title','logo', 'description']
};
</script>

<style>
.card {
  background-color: #ffca2a;
}
.card-action {
  text-align: center;
}

 .card-action2 {
   padding: 10px;
 }

.card-action .card-title{
  margin-top: 10px;
}

.card-action .card-description{
  margin-top: 10px;
}

.card-action .logo{
  display: block;
  position: relative;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  width: 130px;
  line-height: 130px;
  height: 130px;
  margin-left: auto;
  margin-right: auto;
}

.card-action .logo .fa-icon{
  font-size: 4em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
