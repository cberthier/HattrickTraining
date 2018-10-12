<template>
  <div class="card mt-2">
    <div class="card-header">
      {{skillName}}
    </div>
    <div class="card-body">
      <ul>
        <li v-for="skill in skill.skillEvolutions">
          {{skill.date}}: {{skill.skillLevel}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "EvolutionCard",
  props: ["skillName", "skill"]
};
</script>

<style>
#evolutions .card-header {
  background-color: #f2f3ae;
  color: #000000;
}

#evolutions .card-body {
  background-color: #f2f3ae;
  color: #000000;
}
</style>
