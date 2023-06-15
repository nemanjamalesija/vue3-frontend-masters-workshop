<script setup lang="ts">
import { characterList } from '../composables/useUSersStore'
import { defineEmits } from 'vue'

const emits = defineEmits(['add-to-favorites'])
</script>
<template>
  <li class="characters__list-item" v-for="(character, index) in characterList" :key="index">
    <h3>{{ character.name }}</h3>
    <button @click="$emit('add-to-favorites', character)">Add to favorites</button>
  </li>
</template>
