<template>
  <div>
    <div class="pt-3 pb-2 mb-3 border-bottom">
      <h1>Players list</h1>
    </div>

    <div class="card-columns">
      <router-link to="playerDetails" v-for="player in players" v-bind:key="player.id">
        <player-card v-bind:player="player"></player-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import PlayerCard from "./PlayerCard";

export default {
  name: "PlayerList",
  components: {
    PlayerCard
  },
  data: function() {
    return {
      players :
      [
        {
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
        {
          id: 2,
          firstName: "Amir",
          lastName: "Kolli",
          age: 15,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "15-09-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          defending: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          playmaking: {
            skillLevel: 0,
            maxSkillLevel: 8
          },
          winger: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          passing: {
            skillLevel: 0,
            maxSkillLevel: 4
          },
          scoring: {
            skillLevel: 3,
            maxSkillLevel: 3
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 0
          }
        },
        {
          id: 3,
          firstName: "Seydi",
          lastName: "Zoglo",
          age: 16,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "28-08-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 2
          },
          defending: {
            skillLevel: 5,
            maxSkillLevel: 6
          },
          playmaking: {
            skillLevel: 5,
            maxSkillLevel: 6
          },
          winger: {
            skillLevel: 6,
            maxSkillLevel: 7
          },
          passing: {
            skillLevel: 0,
            maxSkillLevel: 3
          },
          scoring: {
            skillLevel: 0,
            maxSkillLevel: 4
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 0
          }
        },
        {
          id: 4,
          firstName: "Lionel",
          lastName: "Castro",
          age: 16,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "03-09-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          defending: {
            skillLevel: 5,
            maxSkillLevel: 5
          },
          playmaking: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          winger: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          passing: {
            skillLevel: 0,
            maxSkillLevel: 8
          },
          scoring: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 0
          }
        },
        {
          id: 5,
          firstName: "Florian",
          lastName: "Paineau",
          age: 16,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "20-08-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          defending: {
            skillLevel: 0,
            maxSkillLevel: 6
          },
          playmaking: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          winger: {
            skillLevel: 4,
            maxSkillLevel: 5
          },
          passing: {
            skillLevel: 4,
            maxSkillLevel: 5
          },
          scoring: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 0
          }
        },
        {
          id: 6,
          firstName: "Antoon",
          lastName: "Dehaes",
          age: 16,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "07-05-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          defending: {
            skillLevel: 0,
            maxSkillLevel: 3
          },
          playmaking: {
            skillLevel: 5,
            maxSkillLevel: 6
          },
          winger: {
            skillLevel: 0,
            maxSkillLevel: 4
          },
          passing: {
            skillLevel: 0,
            maxSkillLevel: 2
          },
          scoring: {
            skillLevel: 4,
            maxSkillLevel: 6
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 0
          }
        },
        {
          id: 7,
          firstName: "Aubin",
          lastName: "Ruault",
          age: 17,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "19-02-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          defending: {
            skillLevel: 6,
            maxSkillLevel: 6
          },
          playmaking: {
            skillLevel: 6,
            maxSkillLevel: 6
          },
          winger: {
            skillLevel: 6,
            maxSkillLevel: 7
          },
          passing: {
            skillLevel: 4,
            maxSkillLevel: 4
          },
          scoring: {
            skillLevel: 0,
            maxSkillLevel: 5
          },
          freeKick: {
            skillLevel: 4,
            maxSkillLevel: 4
          }
        },
        {
          id: 8,
          firstName: "Yannick",
          lastName: "Bessières",
          age: 17,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "12-03-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          defending: {
            skillLevel: 3,
            maxSkillLevel: 3
          },
          playmaking: {
            skillLevel: 6,
            maxSkillLevel: 6
          },
          winger: {
            skillLevel: 0,
            maxSkillLevel: 3
          },
          passing: {
            skillLevel: 0,
            maxSkillLevel: 4
          },
          scoring: {
            skillLevel: 4,
            maxSkillLevel: 5
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 0
          }
        },
        {
          id: 9,
          firstName: "Yoann",
          lastName: "Corbin",
          age: 17,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "08-02-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          defending: {
            skillLevel: 5,
            maxSkillLevel: 5
          },
          playmaking: {
            skillLevel: 6,
            maxSkillLevel: 7
          },
          winger: {
            skillLevel: 4,
            maxSkillLevel: 5
          },
          passing: {
            skillLevel: 5,
            maxSkillLevel: 5
          },
          scoring: {
            skillLevel: 5,
            maxSkillLevel: 5
          },
          freeKick: {
            skillLevel: 2,
            maxSkillLevel: 2
          }
        },
        {
          id: 10,
          firstName: "Dial",
          lastName: "Drame",
          age: 17,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "26-03-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 2
          },
          defending: {
            skillLevel: 4,
            maxSkillLevel: 4
          },
          playmaking: {
            skillLevel: 4,
            maxSkillLevel: 4
          },
          winger: {
            skillLevel: 4,
            maxSkillLevel: 6
          },
          passing: {
            skillLevel: 5,
            maxSkillLevel: 5
          },
          scoring: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 0
          }
        },
        {
          id: 11,
          firstName: "Aymeric",
          lastName: "Fardel",
          age: 17,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "13-05-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          defending: {
            skillLevel: 0,
            maxSkillLevel: 8
          },
          playmaking: {
            skillLevel: 6,
            maxSkillLevel: 6
          },
          winger: {
            skillLevel: 6,
            maxSkillLevel: 6
          },
          passing: {
            skillLevel: 0,
            maxSkillLevel: 4
          },
          scoring: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 0
          }
        },
        {
          id: 12,
          firstName: "Gilles",
          lastName: "Bouquet",
          age: 17,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "07-01-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 2
          },
          defending: {
            skillLevel: 0,
            maxSkillLevel: 5
          },
          playmaking: {
            skillLevel: 2,
            maxSkillLevel: 2
          },
          winger: {
            skillLevel: 5,
            maxSkillLevel: 5
          },
          passing: {
            skillLevel: 3,
            maxSkillLevel: 3
          },
          scoring: {
            skillLevel: 6,
            maxSkillLevel: 6
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 4
          }
        },
        {
          id: 13,
          firstName: "Grégory",
          lastName: "Boinet",
          age: 17,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "01-01-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 2
          },
          defending: {
            skillLevel: 3,
            maxSkillLevel: 3
          },
          playmaking: {
            skillLevel: 5,
            maxSkillLevel: 5
          },
          winger: {
            skillLevel: 5,
            maxSkillLevel: 5
          },
          passing: {
            skillLevel: 6,
            maxSkillLevel: 6
          },
          scoring: {
            skillLevel: 0,
            maxSkillLevel: 4
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 0
          }
        },
        {
          id: 14,
          firstName: "Nguyen",
          lastName: "Vien Sac",
          age: 17,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "28-12-2017",
          keeper: {
            skillLevel: 1,
            maxSkillLevel: 1
          },
          defending: {
            skillLevel: 3,
            maxSkillLevel: 3
          },
          playmaking: {
            skillLevel: 1,
            maxSkillLevel: 1
          },
          winger: {
            skillLevel: 4,
            maxSkillLevel: 4
          },
          passing: {
            skillLevel: 3,
            maxSkillLevel: 3
          },
          scoring: {
            skillLevel: 5,
            maxSkillLevel: 6
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 5
          }
        },
        {
          id: 15,
          firstName: "Rodolphe",
          lastName: "Martinez",
          age: 18,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "16-04-2018",
          keeper: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          defending: {
            skillLevel: 5,
            maxSkillLevel: 5
          },
          playmaking: {
            skillLevel: 5,
            maxSkillLevel: 5
          },
          winger: {
            skillLevel: 7,
            maxSkillLevel: 7
          },
          passing: {
            skillLevel: 0,
            maxSkillLevel: 4
          },
          scoring: {
            skillLevel: 0,
            maxSkillLevel: 0
          },
          freeKick: {
            skillLevel: 0,
            maxSkillLevel: 4
          }
        },
        {
          id: 16,
          firstName: "Georges",
          lastName: "Ducroquet",
          age: 18,
          speciality: "",
          nationality: "France",
          firstDayWithClub: "04-03-2018",
          keeper: {
            skillLevel: 6,
            maxSkillLevel: 7
          },
          defending: {
            skillLevel: 3,
            maxSkillLevel: 3
          },
          playmaking: {
            skillLevel: 0,
            maxSkillLevel: 1
          },
          winger: {
            skillLevel: 1,
            maxSkillLevel: 1
          },
          passing: {
            skillLevel: 0,
            maxSkillLevel: 1
          },
          scoring: {
            skillLevel: 1,
            maxSkillLevel: 1
          },
          freeKick: {
            skillLevel: 6,
            maxSkillLevel: 6
          }
        }
      ]}
    }
  };
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
