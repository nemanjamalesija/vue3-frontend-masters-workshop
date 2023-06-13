<script lang="ts">
import { defineComponent } from 'vue'

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
      ]
    }
  }
})
</script>
<template>
  <div class="characters">
    <ul class="characters__list">
      <li class="characters__list-item" v-for="(character, index) in characterList" :key="index">
        {{ character.name }}
      </li>
    </ul>
  </div>
</template>
