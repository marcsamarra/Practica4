<script setup>
import { RouterLink } from 'vue-router'
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
       
      <div id="view" class='card-list' padding="4px">

        <div class="card" v-for="pokemon in pokemons">
    
     
          <div class="pokemon">
              <h4 class='card-title'>{{ pokemon.name }}</h4>
              <img loading="lazy" v-bind:src="pokemon.sprites.front_default">

              
              <RouterLink to="/details">Detalls</RouterLink>
          </div>

          
    
      </div>

    </div>

   </section>
   
  </main>
</template>
<style>
.card-list {
	display: flex;
	min-height: 100vh;
	min-width: 200vh;
	grid-template-columns: repeat(auto-fit, minmax(var(--gridList-column), 1fr));
	grid-auto-rows: var(--gridList-rows);
	grid-template-rows: masonry;
	grid-auto-flow: row dense;
	grid-gap: var(--gridList-gap, 6px);
	gap: var(--gridList-gap, 6px);
	align-items:flex-start;
}

.card {
	padding: 10px;
	box-shadow: inset;
	width: fit-content;
	background-color: azure;
	margin-bottom: 0.5em;
	position: relative;
}
</style>


