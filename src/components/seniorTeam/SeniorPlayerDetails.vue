<template>
  <div>
    <b-card-group deck class="mt-4">
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="4" class="logo">
            <v-icon name="user" scale="5"/>
          </b-col>
          <b-col md="8">
            <b-card-body
              :title="player.firstName + ' ' + player.lastName"
              :sub-title="player.age + 'years 20 days'"
            >
              <b-badge class="badge-team" pill>2</b-badge>
              <b-badge pill>AT</b-badge>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-card>
        <ul class="list-group list-group-flush">
          <skill-levels
            v-bind:skill-name="'Keeper'"
            v-bind:skill="player.keeper"
            v-b-tooltip.hover.right="player.keeper.skillLevel +'/20'"
          ></skill-levels>
          <skill-levels
            v-bind:skill-name="'Defending'"
            v-bind:skill="player.defending"
            v-b-tooltip.hover.right="player.defending.skillLevel +'/20'"
          ></skill-levels>
          <skill-levels
            v-bind:skill-name="'Playmaking'"
            v-bind:skill="player.playmaking"
            v-b-tooltip.hover.right="player.playmaking.skillLevel +'/20'"
          ></skill-levels>
          <skill-levels
            v-bind:skill-name="'Winger'"
            v-bind:skill="player.winger"
            v-b-tooltip.hover.right="player.winger.skillLevel +'/20'"
          ></skill-levels>
          <skill-levels
            v-bind:skill-name="'Passing'"
            v-bind:skill="player.passing"
            v-b-tooltip.hover.right="player.passing.skillLevel +'/20'"
          ></skill-levels>
          <skill-levels
            v-bind:skill-name="'Scoring'"
            v-bind:skill="player.scoring"
            v-b-tooltip.hover.right="player.scoring.skillLevel +'/20'"
          ></skill-levels>
          <skill-levels
            v-bind:skill-name="'Free kick'"
            v-bind:skill="player.freeKick"
            v-b-tooltip.hover.right="player.freeKick.skillLevel +'/20'"
          ></skill-levels>
        </ul>
      </b-card>
    </b-card-group>

    <b-card-group deck class="mt-4">
      <circular-progress-bar-card title="Experience" value="6" max="20"/>
      <circular-progress-bar-card title="Leadership" value="2" max="8"/>
      <circular-progress-bar-card title="Loyalty" value="12" max="20"/>
    </b-card-group>
    <div class="pt-3 pb-2 mb-3 border-bottom">
      <h1>
        {{player.firstName}} {{player.lastName}}
        <b-badge class="badge-team" pill>2</b-badge>
        <b-badge pill>AT</b-badge>
      </h1>
    </div>
    <b-card-group deck>
      <b-card header="Basic attributes">
        <b-card-text>
          <b-row>
            <b-col cols="3">Age</b-col>
            <b-col cols="9">{{player.age}} years 20 days</b-col>
          </b-row>
          <b-row>
            <b-col cols="3">Speciality</b-col>
            <b-col cols="9">{{player.speciality}}</b-col>
          </b-row>
          <b-row>
            <b-col cols="3" v-b-tooltip.hover title="TSI">
              <v-icon name="vial" scale="2"/>
            </b-col>
            <b-col cols="9">2200</b-col>
          </b-row>
          <b-row>
            <b-col cols="3" v-b-tooltip.hover title="Form">
              <v-icon name="heartbeat" scale="2"/>
            </b-col>
            <b-col cols="9">
              <v-icon v-for="n in 6" name="square-full" class="skill-current"></v-icon>
              <v-icon v-for="n in 2" name="square-full" class="skill-default"></v-icon>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3" v-b-tooltip.hover title="Stamina">
              <v-icon name="battery-half" scale="2"/>
            </b-col>
            <b-col cols="9">
              <v-icon v-for="n in 6" name="square-full" class="skill-current"></v-icon>
              <v-icon v-for="n in 2" name="square-full" class="skill-default"></v-icon>
            </b-col>
          </b-row>
          <b-row>
            <b-col></b-col>
            <b-col></b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import SkillLevels from "@/components/SkillLevels";
import EvolutionCard from "@/components/EvolutionCard";
import CommentCard from "@/components/CommentCard";
import CircularProgressBarCard from "@/components/seniorTeam/CircularProgressBarCard";

export default {
  name: "SeniorPlayerDetails",
  components: {
    SkillLevels,
    EvolutionCard,
    CommentCard,
    CircularProgressBarCard
  },
  data: function() {
    return {
      value: 6,
      max: 20,
      player: {
        id: 16,
        firstName: "Georges",
        lastName: "Ducroquet",
        age: 18,
        speciality: "",
        nationality: "France",
        firstDayWithClub: "04-03-2018",
        keeper: {
          skillLevel: 2,
          maxSkillLevel: 2,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        defending: {
          skillLevel: 5,
          maxSkillLevel: 5,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            },
            {
              skillLevel: 2,
              date: "2018-09-17"
            }
          ]
        },
        playmaking: {
          skillLevel: 5,
          maxSkillLevel: 5,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        winger: {
          skillLevel: 7,
          maxSkillLevel: 7,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        passing: {
          skillLevel: 4,
          maxSkillLevel: 4,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            },
            {
              skillLevel: 1,
              date: "2018-09-10"
            },
            {
              skillLevel: 2,
              date: "2018-09-17"
            }
          ]
        },
        scoring: {
          skillLevel: 3,
          maxSkillLevel: 3,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        freeKick: {
          skillLevel: 2,
          maxSkillLevel: 2,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        }
      },
      chart: {
        backgroundColorNow: "#FFCA2A",
        backgroundColorFutur: "rgba(93,253,203,0.3)"
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.badge {
  background-color: #5BC0EB;
}

.badge-team {
  background-color: #AD343E;

  margin-right: 5px;
}

.card {
  background-color: #356933;
  border-color: #ffca2a;
  border-width: 2px;
}

.card-header {
  background-color: #ffca2a;
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

.logo {
  display: block;
  position: relative;
  text-align: center;
  border: 2px solid #ffca2a;
  line-height: 130px;
  margin-left: auto;
  margin-right: auto;
}

.logo .fa-icon {
  font-size: 4em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
