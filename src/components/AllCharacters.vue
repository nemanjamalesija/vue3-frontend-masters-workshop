<script lang="ts">
import { defineComponent } from 'vue'
import BenderStatistics from './BenderStatistics.vue'
import type { Character } from '@/types/Character'
import FavoriteCharacters from './FavoriteCharacters.vue'
import SingleCharacter from './SingleCharacter.vue'
import AddCharacterForm from './AddCharacterForm.vue'
import CharrsLayout from './CharrsLayout.vue'

export default defineComponent({
  data: function () {
    return {
      characterList: [
        { id: crypto.randomUUID(), name: 'Aang', style: 'waterbender', likeCount: 0 },
        {
          id: JSON.stringify(crypto.randomUUID()),
          name: 'Zuko',
          style: 'firebender',
          likeCount: 0
        },
        {
          id: JSON.stringify(crypto.randomUUID()),
          name: 'Toph',
          style: 'firebender',
          likeCount: 0
        },
        {
          id: JSON.stringify(crypto.randomUUID()),
          name: 'Katara',
          style: 'earthbender',
          likeCount: 0
        }
      ],

      newCharacter: {
        id: JSON.stringify(crypto.randomUUID()),
        name: '',
        style: ''
      },

      favoriteCharacters: [] as Character[]
    }
  },

  methods: {
    addToFavorites(character: Character) {
      this.favoriteCharacters.push(character)
    },

    addNewCharacter(character: Character) {
      this.characterList.push(character)
    }
  },

  components: {
    BenderStatistics,
    FavoriteCharacters,
    SingleCharacter,
    AddCharacterForm,
    CharrsLayout
  }
})
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
