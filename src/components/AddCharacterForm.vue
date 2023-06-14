<script lang="ts">
import type { Character } from '@/types/Character'
import type { PropType } from 'vue'

export default {
  props: {
    characters: {
      type: Array as PropType<Character[]>,
      required: true
    }
  },

  emits: ['add-new-character'],

  data: function () {
    return {
      newCharacter: {
        id: crypto.randomUUID(),
        name: '',
        style: ''
      }
    }
  },

  methods: {
    resetNewCharacter() {
      this.newCharacter = {
        id: crypto.randomUUID(),
        name: '',
        style: ''
      }
    }
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
    <button
      type="submit"
      @click.prevent="$emit('add-new-character', newCharacter), resetNewCharacter()"
    >
      Add new character
    </button>
  </form>
</template>
