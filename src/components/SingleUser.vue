<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { User } from '../types/User'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },
  setup(props) {
    const {
      name,
      email,
      company: { catchPhrase }
    } = computed(() => props.user).value

    return {
      name,
      email,
      catchPhrase
    }
  }
})
</script>

<template>
  <div class="user">
    <h2>{{ name }}</h2>
    <p class="email">{{ email }}</p>
    <p class="catchPhrase">{{ catchPhrase }}</p>
  </div>
</template>

<style>
.user {
  padding: 1rem;
  background-color: goldenrod;
  border-radius: 10px;
  font-family: sans-serif;
}

.user h2 {
  color: #222;
}

.email {
  color: #fafc3e;
  font-size: 16px;
}

.catchPhrase {
  color: #fafba3;
  font-weight: 500;
}
</style>
