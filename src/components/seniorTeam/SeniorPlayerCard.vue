<template>
  <b-card class="card-player mt-2">
    <h5 class="card-title">
      {{player.firstName}} {{player.lastName}}<br>
      <small> 
        {{player.age}} years 20 days<br>
        <b-badge class="badge-team" pill>2</b-badge> 
        <b-badge pill>AT</b-badge>
      </small>
    </h5>
    <b-row>
      <b-col cols="2" v-b-tooltip.hover title="Form" style="z-index: 2;"><v-icon name="heartbeat" scale="1"/></b-col>
      <b-col cols="10">
        <v-icon v-for="n in 6" name="square-full" class="skill-current"></v-icon>
        <v-icon v-for="n in 2" name="square-full" class="skill-default"></v-icon>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2" v-b-tooltip.hover title="Stamina" style="z-index: 2;"><v-icon name="battery-half" scale="1"/></b-col>
      <b-col cols="10">
        <v-icon v-for="n in 6" name="square-full" class="skill-current"></v-icon>
        <v-icon v-for="n in 2" name="square-full" class="skill-default"></v-icon>
      </b-col>
    </b-row>
    <b-link class="stretched-link" href="/#/seniorTeam/playerDetails"/>
  </b-card>
</template>

<script>
import SkillLevels from "@/components/SkillLevels";

export default {
  name: "SeniorPlayerCard",
  props: ["player"],
  components: { SkillLevels }
};
</script>

<style scoped>
  .card {
  background-color: #ffca2a;
}

.card-player {
  min-width: 280px;
  max-width: 280px;
}

.badge {
  background-color: #5BC0EB;
}

.badge-team {
  background-color: #AD343E;

  margin-right: 5px;
}

.skill-current {
  color: #5bc0eb;
  border-style: solid;
  border-color: #ffca2a;
  border-width: 0px 1px;
}

.skill-default {
  color: rgba(255, 255, 255, 0.2);
  border-style: solid;
  border-color: #ffca2a;
  border-width: 0px 1px;
}

/* Normaly on bootstrap */
.stretched-link::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    pointer-events: auto;
    content: "";
    background-color: rgba(0,0,0,0);
}
</style>
