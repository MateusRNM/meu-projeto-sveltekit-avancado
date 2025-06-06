export async function load({url, fetch}) {
    let limit = url.searchParams.get('limit') || 12;
    let page = url.searchParams.get('page') || 1;
    let name = url.searchParams.get('name') || "";
    let tipo = url.searchParams.get('tipo') || 0;
    let offset = (page-1) * limit

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${name == "" ? offset : 0}&limit=${name == "" ? limit : 2000}`);
    let data = await res.json();
    data.results = data.results.filter((d) => d.name.includes(name))

    for (const pokemon of data.results) {
        const id = pokemon.url.split("/").at(-2);
        pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }

    return { pokemons: data.results, limitPast: limit, pagePast: page, namePast: name, typeLast: tipo };
}