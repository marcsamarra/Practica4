<script setup>
import {ref,onMounted} from 'vue'
import {services} from '@/services/services.js'

const pokemons = ref("")

onMounted(async ()=> {
  pokemons.value = await services.fetchPokemons()
})

console.log(pokemons);

</script>

<template>
  <main>
    <h1>Pokemons</h1>
    <ul>
      <li v-for="pokemon in pokemons">
      {{ pokemon}}
      
      </li>
    </ul>
  </main>
</template>
