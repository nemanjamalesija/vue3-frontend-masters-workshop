<script lang="ts">
export default {
  data: function () {
    return {}
  }
}
</script>
<template>
  <nav>
    <ul class="nav__list">
      <li @click="$emit('toggle-page-users')">Users</li>
      <li @click="$emit('toggle-page-login')">LoginForm</li>
    </ul>
  </nav>
</template>

<style>
nav {
  display: flex;
  justify-content: end;
  background-color: goldenrod;
  height: 90px;
  padding: 0 20px;
}

.nav__list {
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: end;
  align-items: center;
  font-family: sans-serif;
  color: #fff;
  font-weight: 500;
  width: 100%;
  width: 400px;
}

.nav__list li {
  cursor: pointer;
}
</style>
