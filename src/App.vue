<script setup lang="ts">
import AllCharacters from './components/AllCharacters.vue'

// const currentComponent = ref<string>('LoginForm')

// function togglePageUsers() {
//   currentComponent.value = 'AllUsers'
// }

// function togglePageLogin() {
//   currentComponent.value = 'LoginForm'
// }
</script>

<template>
  <!-- <UserNavigation @toggle-page-users="togglePageUsers" @toggle-page-login="togglePageLogin" />
  <component :is="currentComponent" /> -->
  <AllCharacters />
</template>

<style scoped></style>
