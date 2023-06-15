<script setup lang="ts">
// import type { Character } from '../types/Character'
// import { defineProps } from 'vue'

import { useCharactersStore } from '../stores/charactersStore'

const charatersStore = useCharactersStore()

// type favCharType = {
//   favoriteCharacters: Character[]
// }

// const props = defineProps<favCharType>()
</script>

<template>
  <div class="favoriteChars">
    <h2>Favorite benders</h2>
    <ul v-if="charatersStore.favoriteCharacters.length > 0">
      <li v-for="(favChar, index) in charatersStore.favoriteCharacters" :key="index">
        <h3>{{ favChar.name }}</h3>
      </li>
    </ul>
    <p v-else>No favorite benders</p>
  </div>
</template>
