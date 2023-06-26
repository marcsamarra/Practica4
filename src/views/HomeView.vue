<script setup>
import {ref,onMounted} from 'vue'
import {services,addPokemon} from '@/services/services.js'

const pokemons = ref("")

onMounted(async ()=> {
  pokemons.value = await services.fetchPokemons()

  for (var i=0;i<10;i++) 
  {
    addPokemon(pokemons[i])
  }
})

console.log(pokemons);

</script>

<template>
  <main>
    <h1>Pokemons</h1>

    <section id="cards" class="cards" margin="10px">
       
       <div id="view" class='card-list' padding="4px"></div>
   </section>
   
  </main>
</template>

