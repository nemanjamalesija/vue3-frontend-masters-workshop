<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let counter = ref<number>(0)
    const incrementAmount = 1

    function incrementCounter() {
      return (counter.value = +incrementAmount)
    }

    return { counter, incrementCounter }
  }
})
</script>

<template>
  <div>
    <h2>
      Counter is: <span>{{ counter }}&nbsp; </span>

      <button @click="incrementCounter">Increment count</button>
    </h2>
  </div>
</template>
