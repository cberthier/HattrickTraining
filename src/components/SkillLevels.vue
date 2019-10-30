<template>
  <li v-if="thumbnail" class="list-group-item">
    <b-row>
      <b-col style="font-size: 0.8rem;">{{skillName}}</b-col>
      <b-col style="font-size: 0.5rem;">
        <v-icon v-for="n in skill.skillLevel" name="square-full" class="skill-current"></v-icon>
        <v-icon
          v-for="n in skill.maxSkillLevel - skill.skillLevel"
          name="square-full"
          class="skill-max"
        ></v-icon>
        <v-icon v-for="n in 20 - skill.maxSkillLevel" name="square-full" class="skill-default"></v-icon>
      </b-col>
    </b-row>
  </li>

  <li v-else class="list-group-item">
    <b-row>
      <b-col class="skill-name" cols="2">{{skillName}}</b-col>
      <b-col class="skill-level">
        <v-icon v-for="n in skill.skillLevel" name="square-full" class="skill-current"></v-icon>
        <v-icon
          v-for="n in skill.maxSkillLevel - skill.skillLevel"
          name="square-full"
          class="skill-max"
        ></v-icon>
        <v-icon v-for="n in 20 - skill.maxSkillLevel" name="square-full" class="skill-default"></v-icon>
      </b-col>
    </b-row>
  </li>
</template>

<script>
export default {
  name: "SkillLevels",
  props: ["skillName", "skill", "thumbnail"]
};
</script>

<style scoped>
/* .skill-name {
  min-width: 100px;
  max-width: 100px;
} */

/* .skill-level {
  min-width: 300px;
  max-width: 400px;
} */
.skill-current {
  color: #5bc0eb;
  border-style: solid;
  border-color: #356933;
  border-width: 0px 1px;
}

.skill-max {
  border-style: solid;
  border-color: #356933;
  border-width: 0px 1px;
}

.skill-default {
  color: rgba(255, 255, 255, 0.2);
  border-style: solid;
  border-color: #356933;
  border-width: 0px 1px;
}
</style>
