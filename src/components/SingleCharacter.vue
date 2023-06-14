<script lang="ts">
import type { Character } from '@/types/Character'
import type { PropType } from 'vue'

export default {
  props: {
    characters: {
      type: Array as PropType<Character[]>,
      required: true
    }
  },

  emits: ['add-to-favorites']
}
</script>
<template>
  <li class="characters__list-item" v-for="(character, index) in characters" :key="index">
    <h3>{{ character.name }}</h3>
    <button @click="$emit('add-to-favorites', character)">Add to favorites</button>
  </li>
</template>
