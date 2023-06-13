<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: function () {
    return {
      counter: 10,
      incrementAmount: 1
    }
  },

  methods: {
    incrementCounter() {
      return (this.counter += this.incrementAmount)
    }
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
