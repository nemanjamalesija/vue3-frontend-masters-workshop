<script lang="ts">
import { defineComponent } from 'vue'

interface Character {
  name: string
  style: string
  likeCount: number
  id: number
}

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
  computed: {
    benderNumber() {
      return {
        waterBenders: this.characterList.filter((char) => char.style === 'waterbender').length,
        fireBenders: this.characterList.filter((char) => char.style === 'firebender').length,
        earthBenders: this.characterList.filter((char) => char.style === 'earthbender').length
      }
    }
  },

  methods: {
    addToFavorites() {}
  }
})
</script>
<template>
  <div class="characters">
    <ul class="characters__list">
      <li class="characters__list-item" v-for="(character, index) in characterList" :key="index">
        <h3>{{ character.name }}</h3>
        <button>Add to favorites</button>
      </li>
    </ul>
  </div>
  <div class="benders">
    <h2>Amount of each bender:</h2>
    <p>
      Waterbenders: <span>{{ benderNumber.waterBenders }}</span>
    </p>
    <p>
      Firebenders: <span>{{ benderNumber.fireBenders }}</span>
    </p>
    <p>
      earthBenders: <span>{{ benderNumber.earthBenders }}</span>
    </p>
  </div>
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
