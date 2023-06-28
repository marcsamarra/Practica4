let url="https://pokeapi.co/api/v2/pokemon";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export async function getPokemons()
{
    let llista=[];

    for (let i=0;i<10;i++)
    {
        let idPokemon = getRandomInt(1000); 
   
        let urlPokemon = url+"/"+idPokemon;

        await fetch(urlPokemon)
            .then((z)=>z.json())
            .then((z)=> llista.push(z))
        ;
    }
    return llista;
}