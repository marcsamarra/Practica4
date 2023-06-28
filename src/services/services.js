import { getPokemons } from "./getPokemons";

export const services = {
    async fetchPokemons () {
        const pokemons = await getPokemons();

        // console.log(pokemons);
        return pokemons
    }
}

export function addPokemon(pokemon)
{
    /*
	const template = document.querySelector('#card-template').content
	const fragment = document.createDocumentFragment()
	
    template.querySelector('.card-title').innerHTML = pokemon.name
    template.querySelector('.card-image').setAttribute('src', pokemon.sprites.front_default)
    let fnboto = 'mostrarDetalls('+pokemon.id+')'

    template.querySelector('.card-button').setAttribute('onclick', fnboto)
   
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    

	view.appendChild(fragment)
    */
}