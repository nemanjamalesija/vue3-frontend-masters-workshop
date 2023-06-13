<script lang="ts">
import type { PropType } from 'vue'
import type { Character } from '../types/Character'

export default {
  props: {
    characters: {
      type: Array as PropType<Character[]>,
      required: true
    }
  },
  computed: {
    benderNumber() {
      return {
        waterBenders: this.characters.filter((char) => char.style === 'waterbender').length,
        fireBenders: this.characters.filter((char) => char.style === 'firebender').length,
        earthBenders: this.characters.filter((char) => char.style === 'earthbender').length
      }
    }
  }
}
</script>
<template>
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
</template>
