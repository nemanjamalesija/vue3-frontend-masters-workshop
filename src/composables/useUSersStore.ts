import type { Character } from '@/types/Character'
import { ref } from 'vue'

const bendersInitialData = [
  { id: JSON.stringify(crypto.randomUUID()), name: 'Aang', style: 'waterbender' },
  {
    id: JSON.stringify(crypto.randomUUID()),
    name: 'Zuko',
    style: 'firebender'
  },
  {
    id: JSON.stringify(crypto.randomUUID()),
    name: 'Toph',
    style: 'firebender'
  },
  {
    id: JSON.stringify(crypto.randomUUID()),
    name: 'Katara',
    style: 'earthbender'
  }
]

export const characterList = ref<Character[]>(bendersInitialData)
