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

/* IIFE to fetch all Pokemon Data */
(async function() {
        let promises = [];
        for(let i = 1; i < 500; i++) {
            promises.push(getPokemonData(i))
        };
        const pokemon = await Promise.all(promises).then(data => {
        console.log(data);
    });
})();

