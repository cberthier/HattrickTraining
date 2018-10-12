<template>
  <li v-if="thumbnail" class="list-group-item">
    <div class="row">
      <div class="col-md-3" style="font-size: 0.8rem;">
        {{skillName}}
      </div>
      <div class="col-md-9" style="font-size: 0.5rem;">
        <v-icon v-for="n in skill.skillLevel" name="square-full" class="skill-current"></v-icon>
        <v-icon v-for="n in skill.maxSkillLevel - skill.skillLevel" name="square-full" class="skill-max"></v-icon>
        <v-icon v-for="n in 20 - skill.maxSkillLevel" name="square-full" class="skill-default"></v-icon>
      </div>
    </div>
  </li>

  <li v-else class="list-group-item">
    <div class="row">
      <div class="col-md-3">
        {{skillName}}
      </div>
      <div class="col-md-9">
        <v-icon v-for="n in skill.skillLevel" name="square-full" class="skill-current"></v-icon>
        <v-icon v-for="n in skill.maxSkillLevel - skill.skillLevel" name="square-full" class="skill-max"></v-icon>
        <v-icon v-for="n in 20 - skill.maxSkillLevel" name="square-full" class="skill-default"></v-icon>  </div>
      </div>
    </li>
</template>

<script>
export default {
  name: "SkillLevels",
  props: ["skillName", "skill", "thumbnail"]
};
</script>

<style scoped>
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
