<script setup lang="ts">
import { characterList } from '../composables/useUSersStore'
import { computed } from 'vue'

// const props = defineProps<{ characters: Character[] }>()

// const benderNumber = {
//   waterBenders: props.characters.filter((char) => char.style === 'waterbender').length,
//   fireBenders: props.characters.filter((char) => char.style === 'firebender').length,
//   earthBenders: props.characters.filter((char) => char.style === 'earthbender').length
// }

const benderNumber = {
  waterBenders: computed(
    () => characterList.value.filter((char) => char.style === 'waterbender').length
  ),
  fireBenders: computed(
    () => characterList.value.filter((char) => char.style === 'firebender').length
  ),
  earthBenders: computed(
    () => characterList.value.filter((char) => char.style === 'earthbender').length
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
