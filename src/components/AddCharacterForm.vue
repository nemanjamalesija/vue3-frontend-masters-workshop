<script setup lang="ts">
import type { Character } from '@/types/Character'
import { ref } from 'vue'
import { useCharactersStore } from '../stores/charactersStore'

const charatersStore = useCharactersStore()

// const props = defineProps<{ characters: Character[] }>()
// const emits = defineEmits(['add-new-character'])

const newCharacter = ref<Character>({
  id: crypto.randomUUID(),
  name: '',
  style: ''
})

function resetNewCharacter() {
  newCharacter.value = {
    id: crypto.randomUUID(),
    name: '',
    style: ''
  }
}
</script>
<template>
  <form>
    <label>
      <input type="text" name="name" v-model="newCharacter.name" />
      Name
    </label>
    <label>
      <input type="text" name="style" v-model="newCharacter.style" />
      Style
    </label>
    <!-- <button
      type="submit"
      @click.prevent="$emit('add-new-character', newCharacter), resetNewCharacter()"
 
    >
      Add new character
    </button> -->
    <button
      type="submit"
      @click.prevent="charatersStore.addNewCharacter(newCharacter), resetNewCharacter()"
    >
      Add new character
    </button>
  </form>
</template>
