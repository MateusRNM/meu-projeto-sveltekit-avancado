export async function load({url}) {
    const limit = url.searchParams.get('limit') || 12;
    const page = url.searchParams.get('page') || 1;
    const offset = (page-1) * 12

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await res.json();

    for (const pokemon of data.results) {
        const id = pokemon.url.split("/").at(-2);
        pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }

    return { pokemons: data.results };
}