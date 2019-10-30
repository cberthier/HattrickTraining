<template>
  <b-card :title="title">
    <VmProgress
      :percentage="(this.value * 100) / this.max"
      type="circle"
      stroke-width="20"
      stroke-color="#ffca2a"
      stroke-linecap="square"
    >
      <h4 style="color: white;">{{value}}/{{max}}</h4>
    </VmProgress>
  </b-card>
</template>

<script>
export default {
  name: "CircularProgressBarCard",
  props: { title: String, value: String, max: String },
  components: {},
  data: function() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  color: white;
  background-color: #356933;
  border-color: #ffca2a;
  border-width: 2px;
}
.card-title {
  text-align: center;
}

.card-body {
  text-align: center;
}
</style>