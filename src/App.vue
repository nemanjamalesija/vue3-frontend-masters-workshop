<script lang="ts">
import { defineComponent } from 'vue'
import CounterBase from './components/CounterBase.vue'
import AllCharacters from './components/AllCharacters.vue'

export default defineComponent({
  data: function () {
    return {}
  },

  components: { CounterBase, AllCharacters }
})
</script>

<template>
  <CounterBase />
  <AllCharacters />
</template>

<style scoped></style>
