<template>
  <div class="card player-card">
    <div class="card-header">
      {{player.firstName}} {{player.lastName}}
    </div>
    <ul class="list-group list-group-flush">

      <skill-levels v-bind:skill-name="'Keeper'" v-bind:skill="player.keeper" v-bind:thumbnail="true"></skill-levels>
      <skill-levels v-bind:skill-name="'Defending'" v-bind:skill="player.defending" v-bind:thumbnail="true"></skill-levels>
      <skill-levels v-bind:skill-name="'Playmaking'" v-bind:skill="player.playmaking" v-bind:thumbnail="true"></skill-levels>
      <skill-levels v-bind:skill-name="'Winger'" v-bind:skill="player.winger" v-bind:thumbnail="true"></skill-levels>
      <skill-levels v-bind:skill-name="'Passing'" v-bind:skill="player.passing" v-bind:thumbnail="true"></skill-levels>
      <skill-levels v-bind:skill-name="'Scoring'" v-bind:skill="player.scoring" v-bind:thumbnail="true"></skill-levels>
      <skill-levels v-bind:skill-name="'Free kick'" v-bind:skill="player.freeKick" v-bind:thumbnail="true"></skill-levels>

    </ul>
  </div>
</template>

<script>
import SkillLevels from "./SkillLevels";

export default {
  name: "PlayerCard",
  props: ["player"],
  components: { SkillLevels }
};
</script>

<style scoped>
.card.player-card .card-header {
  color: #000000;
}

.card.player-card .card-body {
  color: #000000;
}
</style>
