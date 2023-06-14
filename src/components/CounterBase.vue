<script setup lang="ts">
import { ref } from 'vue'

let counter = ref<number>(0)
const incrementAmount = 1

function incrementCounter() {
  return (counter.value = +incrementAmount)
}

return { counter, incrementCounter }
</script>

<template>
  <div>
    <h2>
      Counter is: <span>{{ counter }}&nbsp; </span>

      <button @click="incrementCounter">Increment count</button>
    </h2>
  </div>
</template>
