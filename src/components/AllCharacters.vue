<script lang="ts">
import { defineComponent } from 'vue'
import BenderStatistics from './BenderStatistics.vue'
import type { Character } from '@/types/Character'
import FavoriteCharacters from './FavoriteCharacters.vue'
import SingleCharacter from './SingleCharacter.vue'

export default defineComponent({
  data: function () {
    return {
      characterList: [
        { id: 1, name: 'Aang', style: 'waterbender', likeCount: 0 },
        {
          id: 2,
          name: 'Zuko',
          style: 'firebender',
          likeCount: 0
        },
        {
          id: 3,
          name: 'Toph',
          style: 'firebender',
          likeCount: 0
        },
        {
          id: 4,
          name: 'Katara',
          style: 'earthbender',
          likeCount: 0
        }
      ],
      favoriteCharacters: [] as Character[]
    }
  },

  methods: {
    addToFavorites(character: Character) {
      this.favoriteCharacters.push(character)
    }
  },

  components: { BenderStatistics, FavoriteCharacters, SingleCharacter }
})
</script>
<template>
  <div class="characters">
    <ul class="characters__list">
      <SingleCharacter :characters="characterList" @add-to-favorites="addToFavorites" />
    </ul>
  </div>
  <BenderStatistics :characters="characterList" />
  <FavoriteCharacters :favoriteCharacters="favoriteCharacters" />
</template>
