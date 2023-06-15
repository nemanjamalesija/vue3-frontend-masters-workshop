import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Character } from '@/types/Character'

const characterListStore: Character[] = [
  { id: JSON.stringify(crypto.randomUUID()), name: 'Aang', style: 'waterbender' },
  {
    id: JSON.stringify(crypto.randomUUID()),
    name: 'Zuko',
    style: 'firebender'
  },
  {
    id: JSON.stringify(crypto.randomUUID()),
    name: 'Toph',
    style: 'firebender'
  },
  {
    id: JSON.stringify(crypto.randomUUID()),
    name: 'Katara',
    style: 'earthbender'
  }
]

export const useCharactersStore = defineStore('characterStore', () => {
  const charactersState = ref(characterListStore)

  const favoriteCharacters = ref([] as Character[])

  function addNewCharacter(character: Character) {
    charactersState.value.push(character)
  }

  function addToFavorites(character: Character) {
    favoriteCharacters.value.push(character)
  }

  const benderNumber = {
    waterBenders: computed(
      () => charactersState.value.filter((char) => char.style === 'waterbender').length
    ),
    fireBenders: computed(
      () => charactersState.value.filter((char) => char.style === 'firebender').length
    ),
    earthBenders: computed(
      () => charactersState.value.filter((char) => char.style === 'earthbender').length
    )
  }

  return { charactersState, addNewCharacter, benderNumber, favoriteCharacters, addToFavorites }
})
