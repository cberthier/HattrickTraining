<template>
  <main>
    <div>
      <h1 class="border-bottom">Senior Team:</h1>
      <b-card-group deck>
        <action-card-horizontal title="Team Players" logo="users" href="/#/seniorTeam/playerList" description="Show all your team players with their characteristics and characteristics evolutions."/>
        <action-card-horizontal title="Auto Update" logo="file-import"  href="#" description="Upload csv file from Hattrick site to automatique update your team player."/>
        <action-card-horizontal title="Add Player" logo="user-plus"  href="#" description="For some case, you can add a new player by specifying all of its characteristics manually."/>
      </b-card-group>

      <b-card-group deck class="mt-2">
        <action-card-horizontal title="Training Analyser" logo="desktop"  href="#" description="Analyze your team to set up the best training according to your goal."/>
        <action-card-horizontal style="visibility: hidden;"/>
        <action-card-horizontal style="visibility: hidden;"/>
      </b-card-group>
    </div>

    <div>
      <h1 class="border-bottom">Youth Team:</h1>
      <b-card-group deck>
        <action-card-horizontal title="Team Players" logo="users" href="/#/youthTeam/playerList" description="Show all your team players with their characteristics and characteristics evolutions."/>
        <action-card-horizontal title="Auto Update" logo="file-import"  href="#" description="Upload csv file from Hattrick site to automatique update your team player."/>
        <action-card-horizontal title="Add Player" logo="user-plus"  href="#" description="For some case, you can add a new player by specifying all of its characteristics manually."/>
      </b-card-group>

      <b-card-group deck class="mt-2">
        <action-card-horizontal title="Training Analyser" logo="desktop"  href="#" description="Analyze your team to set up the best training according to your goal."/>
        <action-card-horizontal style="visibility: hidden;"/>
        <action-card-horizontal style="visibility: hidden;"/>
      </b-card-group>
    </div>

    <div style="height: 500px;"></div>

    <div>
      <h1 class="border-bottom">Senior Team:</h1>
      <b-card-group deck>
        <action-card title="Team Players" logo="users" description="Show all your team players with their characteristics and characteristics evolutions."/>
        <action-card title="Auto Update" logo="file-import" description="Upload csv file from Hattrick site to automatique update your team player."/>
        <action-card title="Add Player" logo="user-plus" description="For some case, you can add a new player by specifying all of its characteristics manually."/>
      </b-card-group>

      <b-card-group deck class="mt-2">
        <action-card title="Training Analyser" logo="desktop" description="Analyze your team to set up the best training according to your goal."/>
        <action-card style="visibility: hidden;"/>
        <action-card style="visibility: hidden;"/>
      </b-card-group>
    </div>

    <div>
      <h1 class="border-bottom">Youth Team:</h1>
      <b-card-group deck>
        <action-card title="Team Players" logo="users" description="Show all your team players with their characteristics and characteristics evolutions."/>
        <action-card title="Auto Update" logo="file-import" description="Upload csv file from Hattrick site to automatique update your team player."/>
        <action-card title="Add Player" logo="user-plus" description="For some case, you can add a new player by specifying all of its characteristics manually."/>
      </b-card-group>

      <b-card-group deck class="mt-2">
        <action-card title="Training Analyser" logo="desktop" description="Analyze your team to set up the best training according to your goal."/>
        <action-card style="visibility: hidden;"/>
        <action-card style="visibility: hidden;"/>
      </b-card-group>
    </div>

    <div style="height: 500px;"></div>

    <div>
      <h1 class="border-bottom">Senior Team:</h1>
      <b-alert show variant="warning">No team found !</b-alert>
      <b-card-group deck>
        <action-card-horizontal title="Import Team" logo="file-import" description="Upload csv file from Hattrick site to automatique importe your team player."/>
        <action-card-horizontal title="Create Team" logo="plus" description="You can create your team manually."/>
      </b-card-group>
    </div>

    <div>
      <h1 class="border-bottom">Youth Team:</h1>
      <b-alert show variant="warning">No team found !</b-alert>
      <b-card-group deck>
        <action-card-horizontal title="Import Team" logo="file-import" description="Upload csv file from Hattrick site to automatique importe your team player."/>
        <action-card-horizontal title="Create Team" logo="plus" description="You can create your team manually."/>
      </b-card-group>
    </div>

    <div style="height: 500px;"></div>

    <div>
      <h1 class="border-bottom">Senior Team:</h1>
      <b-alert show variant="warning">No team found !</b-alert>
      <b-card-group deck>
        <action-card title="Import Team" logo="file-import" description="Upload csv file from Hattrick site to automatique importe your team player."/>
        <action-card title="Create Team" logo="plus" description="You can create your team manually."/>
      </b-card-group>
    </div>

    <div>
      <h1 class="border-bottom">Youth Team:</h1>
      <b-alert show variant="warning">No team found !</b-alert>
      <b-card-group deck>
        <action-card title="Import Team" logo="file-import" description="Upload csv file from Hattrick site to automatique importe your team player."/>
        <action-card title="Create Team" logo="plus" description="You can create your team manually."/>
      </b-card-group>
    </div>

    <div style="height: 500px;"></div>
  </main>
</template>

<script>
import image from "@/assets/Gioppino_Soccer_Ball.svg";
import ActionCard from "@/components/ActionCard";
import ActionCardHorizontal from "@/components/ActionCardHorizontal";

export default {
  name: "Home",
  components: {ActionCard, ActionCardHorizontal},
  data: function () {
        return {
            image: image
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
