<script setup lang="ts">
import { characterList } from '../composables/useUSersStore'
import { computed } from 'vue'
import { useCounterStore } from '../stores/charactersStore'

// const props = defineProps<{ characters: Character[] }>()

// const benderNumber = {
//   waterBenders: props.characters.filter((char) => char.style === 'waterbender').length,
//   fireBenders: props.characters.filter((char) => char.style === 'firebender').length,
//   earthBenders: props.characters.filter((char) => char.style === 'earthbender').length
// }

// const benderNumber = {
//   waterBenders: computed(
//     () => characterList.value.filter((char) => char.style === 'waterbender').length
//   ),
//   fireBenders: computed(
//     () => characterList.value.filter((char) => char.style === 'firebender').length
//   ),
//   earthBenders: computed(
//     () => characterList.value.filter((char) => char.style === 'earthbender').length
//   )
// }

const charatersStore = useCounterStore()
</script>

<template>
  <div class="benders">
    <h2>Amount of each bender:</h2>
    <p>
      Waterbenders: <span>{{ charatersStore.benderNumber.fireBenders }}</span>
    </p>
    <p>
      Firebenders: <span>{{ charatersStore.benderNumber.waterBenders }}</span>
    </p>
    <p>
      earthBenders: <span>{{ charatersStore.benderNumber.earthBenders }}</span>
    </p>
  </div>
</template>
