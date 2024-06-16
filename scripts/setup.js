/* loading screen */
window.addEventListener('load', () => {
    document.querySelector('.loading-screen').style.display = 'none';
});

/* fetching Pokemon data with PokeAPI */
async function getPokemonData(num) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error("Error detected: " + error);
        alert("Error detected: " + error)
    }
}
async function getAllPokemonData() {
    let info = [];
    let promises = [];
    for(let i = 1; i < 500; i++) {
        promises.push(getPokemonData(i))
    };
    const pokemon = await Promise.all(promises);
    console.log(promises);
}
getAllPokemonData();

