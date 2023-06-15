<script setup lang="ts">
// import type { Character } from '@/types/Character'
import { characterList } from '../composables/useUSersStore'
// import { defineEmits } from 'vue'
import { useCharactersStore } from '../stores/charactersStore'

const charatersStore = useCharactersStore()

// const emits = defineEmits<{
//   (e: 'add-to-favorites', character: Character): void
// }>()
</script>

<template>
  <li class="characters__list-item" v-for="(character, index) in characterList" :key="index">
    <h3>{{ character.name }}</h3>
    <!-- <button @click="emits('add-to-favorites', character)">Add to favorites</button> -->
    <button @click="charatersStore.addToFavorites(character)">Add to favorites</button>
  </li>
</template>
