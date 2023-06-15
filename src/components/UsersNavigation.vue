<script setup lang="ts">
import { defineEmits } from 'vue'
;['toggle-page-users', 'toggle-page-login']

const emits = defineEmits<{
  (e: 'toggle-page-users'): void
  (e: 'toggle-page-login'): void
}>()
</script>
<template>
  <nav>
    <ul class="nav__list">
      <li @click="emits('toggle-page-users')">Users</li>
      <li @click="emits('toggle-page-login')">LoginForm</li>
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
