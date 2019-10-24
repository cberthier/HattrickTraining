<template>
  <b-card no-body class="overflow-hidden card-action">
    <b-row no-gutters align-v="center">
      <b-col md="4">
        <div class="logo">
          <v-icon :name="logo" scale="4"/>
        </div>
      </b-col>
      <b-col md="8">
        <b-card-body :title="title">
          <b-card-text>
            {{description}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "ActionCardHorizontal",
  props: ['title','logo', 'description']
};
</script>

<style scoped>
.card {
  background-color: #ffca2a;
  max-width: 800px;
}

.card-action .row {
  min-height: 150px;
}

.card-action {
  text-align: center;
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
