<script setup lang="ts">
import type { User } from '../types/User'

const props = defineProps<{ user: User }>()
</script>

<template>
  <li>
    <div class="user">
      <h2>{{ props.user.name }}</h2>
      <p class="email">{{ props.user.email }}</p>
      <p class="catchPhrase">{{ props.user.company.catchPhrase }}</p>
    </div>
  </li>
</template>

<style>
.user {
  padding: 1rem;
  background-color: goldenrod;
  border-radius: 10px;
  font-family: sans-serif;
}

.user h2 {
  color: #222;
}

.email {
  color: #fafc3e;
  font-size: 16px;
}

.catchPhrase {
  color: #fafba3;
  font-weight: 500;
}
</style>
