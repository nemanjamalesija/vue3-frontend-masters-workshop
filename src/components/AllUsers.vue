<script lang="ts">
import type { User } from '@/types/User'
import SingleUser from './SingleUser.vue'

export default {
  data: function () {
    return {
      users: [] as User[]
    }
  },

  methods: {
    async fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json()
        console.log(json)
        this.users = json
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
  },

  created() {
    this.fetchUsers()
  },

  components: { SingleUser }
}
</script>

<template>
  <h1>Users</h1>
  <ul v-if="users" class="users">
    <li v-for="(user, index) in users" :key="index">
      <SingleUser :user="user" />
    </li>
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
