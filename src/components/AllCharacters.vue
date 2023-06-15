<script setup lang="ts">
import BenderStatistics from './BenderStatistics.vue'
import type { Character } from '@/types/Character'
import FavoriteCharacters from './FavoriteCharacters.vue'
import SingleCharacter from './SingleCharacter.vue'
import AddCharacterForm from './AddCharacterForm.vue'
import CharrsLayout from './CharrsLayout.vue'
import { ref } from 'vue'
import { characterList } from '../composables/useUSersStore'

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
      <BenderStatistics />
      <FavoriteCharacters :favoriteCharacters="favoriteCharacters" />
    </template>
    <!-- MAIN -->
    <template v-slot:main>
      <div class="characters">
        <ul class="characters__list">
          <SingleCharacter @add-to-favorites="addToFavorites" />
        </ul>
      </div>
      <AddCharacterForm @add-new-character="addNewCharacter" />
    </template>
    <!-- FOOTER -->

    <template v-slot:footer>
      <p>Copyright Nemanja Malesija</p>
    </template>
  </CharrsLayout>
</template>
