<script lang="ts">
import type { Character } from '../types/Character'

import type { PropType } from 'vue'
export default {
  props: {
    favoriteCharacters: {
      type: Array as PropType<Character[]>,
      required: true
    }
  }
}
</script>

<template>
  <div class="favoriteChars">
    <h2>Favorite benders</h2>
    <ul v-if="favoriteCharacters.length > 0">
      <li v-for="(favChar, index) in favoriteCharacters" :key="index">
        <h3>{{ favChar.name }}</h3>
      </li>
    </ul>
    <p v-else>No favorite benders</p>
  </div>
</template>
