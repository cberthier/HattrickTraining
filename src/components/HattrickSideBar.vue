<template>
  <div class="col-md-2 d-none d-md-block ht-sidebar">
    <div class="ht-sidebar-sticky">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link active" to="/playerList">Player List</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HattrickSideBar"
};
</script>

<style scoped>
.ht-sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
}

.ht-sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
}

.ht-sidebar a {
  color: #ffffff;
}
</style>
