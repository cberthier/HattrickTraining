<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="item in items" class="breadcrumb-item" v-bind:class="{'active': item.active}">
        <b-link v-if="!item.active" class="white-text" :to="item.to"><v-icon :name="item.icon"/> {{item.text}}</b-link>
        <span v-else class="white-text"><v-icon :name="item.icon"/> {{item.text}}</span>
      </li>
    </ol>
  </nav>
</template>

<script>

export default {
  name: "HatrickBreadcrumb",
  props: ['items']
};
</script>

<style scoped>
.breadcrumb{ 
  background-color: #356933;
  color: #FFFFFF;
}

.breadcrumb-item a{
  color: #FFFFFF;
}

.breadcrumb-item.active span{
  color: #ffca2a;
  text-decoration: none;
}
</style>
