<script setup lang="ts">
import BenderStatistics from './BenderStatistics.vue'
import type { Character } from '@/types/Character'
import FavoriteCharacters from './FavoriteCharacters.vue'
import SingleCharacter from './SingleCharacter.vue'
import AddCharacterForm from './AddCharacterForm.vue'
import CharrsLayout from './CharrsLayout.vue'
import { ref } from 'vue'

const bendersInitialData = [
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

const characterList = ref<Character[]>(bendersInitialData)

const favoriteCharacters = ref([] as Character[])

function addToFavorites(character: Character) {
  favoriteCharacters.value.push(character)
}

function addNewCharacter(character: Character) {
  characterList.value.push(character)
}
</script>
<template>
  <!-- SIDEBAR -->
  <CharrsLayout>
    <template v-slot:aside>
      <BenderStatistics :characters="characterList" />
      <FavoriteCharacters :favoriteCharacters="favoriteCharacters" />
    </template>
    <!-- MAIN -->
    <template v-slot:main>
      <div class="characters">
        <ul class="characters__list">
          <SingleCharacter :characters="characterList" @add-to-favorites="addToFavorites" />
        </ul>
      </div>
      <AddCharacterForm :characters="characterList" @add-new-character="addNewCharacter" />
    </template>
    <!-- FOOTER -->

    <template v-slot:footer>
      <p>Copyright Nemanja Malesija</p>
    </template>
  </CharrsLayout>
</template>
