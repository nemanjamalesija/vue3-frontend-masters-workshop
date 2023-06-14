<script lang="ts">
import { defineComponent } from 'vue'
import AllUsers from './components/AllUsers.vue'
import LoginForm from './components/LoginForm.vue'
import UserNavigation from './components/UsersNavigation.vue'

export default defineComponent({
  data: function () {
    return {
      currentComponent: 'LoginForm'
    }
  },

  methods: {
    togglePageUsers() {
      this.currentComponent = 'AllUsers'
    },

    togglePageLogin() {
      this.currentComponent = 'LoginForm'
    }
  },

  components: { AllUsers, LoginForm, UserNavigation }
})
</script>

<template>
  <UserNavigation @toggle-page-users="togglePageUsers" @toggle-page-login="togglePageLogin" />
  <component :is="currentComponent" />
</template>

<style scoped>
template {
  background-color: #f3f3f3;
}
</style>
