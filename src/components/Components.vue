<template>
  <b-card>
    <b-row>
      <b-col>
        <h4>Buttons</h4>
        <login-button/>
        <signup-button/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Player card</h4>
        <senior-player-card v-bind:player="player"/>
        <youth-player-card v-bind:player="player"/>
        <player-card v-bind:player="player"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Action card</h4>
        <action-card title="Team Players" logo="users" description="Show all your team players with their characteristics and characteristics evolutions."/>
        <action-card-horizontal title="Team Players" logo="users" href="/#/seniorTeam/playerList" description="Show all your team players with their characteristics and characteristics evolutions."/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Evolution card</h4>
        <evolution-card/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Radar player</h4>
        <radar-chart-player v-bind:chart="chart"/>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import LoginButton from "@/components/button/LoginButton"
import SignupButton from "@/components/button/SignupButton"
import SeniorPlayerCard from "@/components/seniorTeam/SeniorPlayerCard"
import YouthPlayerCard from "@/components/youthTeam/YouthPlayerCard"
import PlayerCard from "@/components/PlayerCard"
import ActionCardHorizontal from "@/components/ActionCardHorizontal"
import ActionCard from "@/components/ActionCard"
import EvolutionCard from "@/components/EvolutionCard"
import RadarChartPlayer from "@/components/RadarChartPlayer"

export default {
  name: "Components",
  components: {
    LoginButton, SignupButton, SeniorPlayerCard, YouthPlayerCard, PlayerCard, ActionCard, ActionCardHorizontal, EvolutionCard, RadarChartPlayer
  },
  data: function() {
    return {
      player: {
        id: 1,
          firstName: "Dominique",
          lastName: "Oudard",
          age: 15,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "16-07-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          defending: {
            skillLevel: 4,
            maxSkillLevel: 6
          },
          playmaking: {
            skillLevel: 0,
            maxSkillLevel: 4
          },
          winger: {
            skillLevel: 0,
            maxSkillLevel: 3
          },
          passing: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          scoring: {
            skillLevel: 3,
            maxSkillLevel: 4
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 0
          }
      },
      chart: {
        backgroundColorNow: '#FFCA2A',
        backgroundColorFutur: 'rgba(93,253,203,0.3)'
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: #356933;
}
</style>
