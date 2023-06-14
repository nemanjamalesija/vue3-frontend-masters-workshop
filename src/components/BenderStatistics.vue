<script setup lang="ts">
import { computed } from 'vue'
import type { Character } from '../types/Character'
import { defineProps } from 'vue'

const props = defineProps<{ characters: Character[] }>()

const benderNumber = {
  waterBenders: computed(
    () => props.characters.filter((char) => char.style === 'waterbender').length
  ),
  fireBenders: computed(
    () => props.characters.filter((char) => char.style === 'firebender').length
  ),
  earthBenders: computed(
    () => props.characters.filter((char) => char.style === 'earthbender').length
  )
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
