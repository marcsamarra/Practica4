import { getPokemons } from "./getPokemons";

export const services = {
    async fetchPokemons () {
        const pokemons = await getPokemons();

        console.log(pokemons)
    }
}