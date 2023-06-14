<script setup lang="ts">
import { ref } from 'vue'

const user = ref({ name: '', password: '' })
</script>

<template>
  <form class="login__form">
    <div class="login__form--control">
      <label> Name </label>
      <input type="text" name="name" v-model="user.name" />
    </div>
    <div class="login__form--control">
      <label> Style </label>
      <input type="password" name="password" v-model="user.password" />
    </div>
    <button>Login</button>
  </form>
</template>

<style>
.login__form {
  font-family: sans-serif;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 600px;
  padding: 1rem;
  background-color: goldenrod;
  margin: 0 auto;
  margin-top: 150px;
}

.login__form--control {
  display: flex;
  align-items: center;
  gap: 8px;
}

.login__form button,
.login__form input {
  display: inline-block;
  border-radius: 10px;
  border: none;
  padding: 8px 16px;
}

.login__form label {
  color: #fff;
}
</style>
