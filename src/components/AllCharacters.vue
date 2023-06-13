<script lang="ts">
import { defineComponent } from 'vue'
import BenderStatistics from './BenderStatistics.vue'
import type { Character } from '@/types/Character'

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

  components: { BenderStatistics }
})
</script>
<template>
  <div class="characters">
    <ul class="characters__list">
      <li class="characters__list-item" v-for="(character, index) in characterList" :key="index">
        <h3>{{ character.name }}</h3>
        <button @click="addToFavorites(character)">Add to favorites</button>
      </li>
    </ul>
  </div>
  <BenderStatistics :characters="characterList" />
  <div class="favoriteChars">
    <h2>Favorite benders</h2>
    <ul v-if="favoriteCharacters.length > 0">
      <li v-for="(favChar, index) in favoriteCharacters" :key="index">
        <h3>{{ favChar.name }}</h3>
      </li>
    </ul>
    <p v-else>No favorite benders</p>
  </div>
</template>
