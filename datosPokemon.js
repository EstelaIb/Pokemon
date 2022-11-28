const consultarPokemon = (id,number) =>
{
    fetch (`https:///pokeapi.co/api/v2/pokemon/${id}`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{

        pintarPokemon(data,number)
    })
    .catch((error)=>{
        console.log(error);
    });
};

const bouttonSeleccionar = () =>
{
    let pokemonUno = Math.round(Math.random() * 150);
    let pokemonDos = Math.round(Math.random() * 150);
    consultarPokemon(pokemonUno,1);
    consultarPokemon(pokemonDos,2);

};

bouttonSeleccionar()

const lista = document.getElementById('listarpokemon')

const pintarPokemon = (data,id) => 
{
    let item = lista.querySelector(`#pok-${id}`);

    item.getElementsByTagName("img")[0].setAttribute("src",data.sprites.front_default);
    item.getElementsByTagName("p")[0].innerHTML = data.name;
    
    let poke = ''
    for (let i = 0; i < data.abilities.length; i++){
        poke += `<li class="text-center">${data.abilities[i].ability.name}</li>`
    }

    item.getElementsByTagName('ol')[0].innerHTML = poke;
};