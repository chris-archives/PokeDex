/* loading screen */
window.addEventListener('load', () => {
    document.querySelector('.loading-screen').style.display = 'none';
});

/* fetching infromation from PokeAPI */
async function fetchPokemonName() {
    try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=898');
    const data = await response.json();
    return data;
    }
    catch (error) {
        console.error("Error detected " + error);
        alert("Error detected " + error)
    }
}

/* fetching Pokemon name */
fetchPokemonName().then( data => {
    for (let i = 0; i < data.results.length; i++) {
        let names = data.results[i].name;
        console.log(names);
    }
});

/* fetching infromation from PokeAPI */
async function fetchPokemonType() {
    try {
        const responseTwo = await fetch('https://pokeapi.co/api/v2/type/');
        const dataTwo = await responseTwo.json();
        return dataTwo;
    }
    catch(error) {
        console.error("Error detected " + error);
        alert("Error detected " + error)
    }
}

/* fetching Pokemon type */
fetchPokemonType().then(dataTwo => {
    for(let i = 0; i < dataTwo.results.length; i++) {
        let type = dataTwo.results[i].name;
        console.log(type);
    }
})
