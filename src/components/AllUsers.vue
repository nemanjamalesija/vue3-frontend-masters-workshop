<script setup lang="ts">
import type { User } from '@/types/User'
import SingleUser from './SingleUser.vue'
import { ref } from 'vue'

const users = ref([] as User[])

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json()
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

fetchUsers()
</script>

<template>
  <h1>Users</h1>
  <ul v-if="users.length >= 0" class="users">
    <SingleUser v-for="(user, index) in users" :key="index" :user="user" />
  </ul>
  <p v-else>Loading...</p>
</template>

<style>
.users {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
</style>
