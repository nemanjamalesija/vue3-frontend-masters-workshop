<script lang="ts">
import { defineComponent } from 'vue'
import CounterBase from './components/CounterBase.vue'

export default defineComponent({
  data: () => ({}),

  components: { CounterBase }
})
</script>

<template>
  <CounterBase />
</template>

<style scoped></style>
