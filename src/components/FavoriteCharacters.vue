<script setup lang="ts">
import type { Character } from '../types/Character'
import { defineProps } from 'vue'

const props = defineProps<{ favoriteCharacters: Character[] }>()
</script>

<template>
  <div class="favoriteChars">
    <h2>Favorite benders</h2>
    <ul v-if="props.favoriteCharacters.length > 0">
      <li v-for="(favChar, index) in props.favoriteCharacters" :key="index">
        <h3>{{ favChar.name }}</h3>
      </li>
    </ul>
    <p v-else>No favorite benders</p>
  </div>
</template>
