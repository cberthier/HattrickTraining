<template>
  <div>
    <div class="pt-3 pb-2 mb-3 border-bottom">
      <h1>{{player.firstName}} {{player.lastName}}</h1>
    </div>
    <div class="row">
      <div class="col-md-auto">
        <h3 class="border-bottom">Characteristics:</h3>
      </div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6">
        <ul class="list-group list-group-flush">

          <skill-levels v-bind:skill-name="'Keeper'" v-bind:skill="player.keeper"></skill-levels>
          <skill-levels v-bind:skill-name="'Defending'" v-bind:skill="player.defending"></skill-levels>
          <skill-levels v-bind:skill-name="'Playmaking'" v-bind:skill="player.playmaking"></skill-levels>
          <skill-levels v-bind:skill-name="'Winger'" v-bind:skill="player.winger"></skill-levels>
          <skill-levels v-bind:skill-name="'Passing'" v-bind:skill="player.passing"></skill-levels>
          <skill-levels v-bind:skill-name="'Scoring'" v-bind:skill="player.scoring"></skill-levels>
          <skill-levels v-bind:skill-name="'Free kick'" v-bind:skill="player.freeKick"></skill-levels>

        </ul>
      </div>
      <div class="col-md-1">
      </div>
      <div class="col-md-3">
        <radar-chart-player v-bind:chart="chart"></radar-chart-player>
      </div>
    </div>

    <div class="row">
      <div class="col-md-auto">
        <h3 class="border-bottom">Evolutions:</h3>
      </div>
    </div>
    <div class="row" id="evolutions">
      <div class="col">
        <div class="card-columns">
          <evolution-card v-bind:skill-name="'Keeper'" v-bind:skill="player.keeper"></evolution-card>
          <evolution-card v-bind:skill-name="'Defending'" v-bind:skill="player.defending"></evolution-card>
          <evolution-card v-bind:skill-name="'Playmaking'" v-bind:skill="player.playmaking"></evolution-card>
          <evolution-card v-bind:skill-name="'Winger'" v-bind:skill="player.winger"></evolution-card>
          <evolution-card v-bind:skill-name="'Passing'" v-bind:skill="player.passing"></evolution-card>
          <evolution-card v-bind:skill-name="'Scoring'" v-bind:skill="player.scoring"></evolution-card>
          <evolution-card v-bind:skill-name="'Free kick'" v-bind:skill="player.freeKick"></evolution-card>
        </div>
      </div>
    </div>

    
    <div class="row">
      <div class="col-md-auto">
        <h3 class="border-bottom">Comments:</h3>
      </div>
    </div>
    <div class="row" id="comment">
      <div class="col-md-auto">
        <comment-card></comment-card>
        <comment-card></comment-card>
        <comment-card></comment-card>
      </div>
    </div>
  </div>
</template>

<script>
import SkillLevels from "./SkillLevels";
import EvolutionCard from "./EvolutionCard";
import CommentCard from "./CommentCard";
import RadarChartPlayer from "./RadarChartPlayer";

export default {
  name: "PlayerDetails",
  components: {SkillLevels, EvolutionCard, CommentCard, RadarChartPlayer},
  data: function(){
    return {
      player: {
        id: 16,
        firstName: "Georges",
        lastName: "Ducroquet",
        age: 18,
        speciality: "",
        nationality: "France",
        firstDayWithClub: "04-03-2018",
        keeper:{
          skillLevel: 0,
          maxSkillLevel: 2,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: '2018-09-03'
            }
          ]
        },
        defending:{
          skillLevel:2,
          maxSkillLevel:5,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: '2018-09-03'
            },
            {
              skillLevel: 2,
              date: '2018-09-17'
            }
          ]
        },
        playmaking:{
          skillLevel:0,
          maxSkillLevel:5,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: '2018-09-03'
            }
          ]
        },
        winger:{
          skillLevel:0,
          maxSkillLevel:7,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: '2018-09-03'
            }
          ]
        },
        passing:{
          skillLevel:4,
          maxSkillLevel:4,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: '2018-09-03'
            },
            {
              skillLevel: 1,
              date: '2018-09-10'
            },
            {
              skillLevel: 2,
              date: '2018-09-17'
            }
          ]
        },
        scoring:{
          skillLevel:0,
          maxSkillLevel:3,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: '2018-09-03'
            }
          ]
        },
        freeKick:{
          skillLevel:0,
          maxSkillLevel:2,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: '2018-09-03'
            }
          ]
        }
      },
      chart: {
        backgroundColorNow: '#FFCA2A',
        backgroundColorFutur: 'rgba(93,253,203,0.3)'
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
