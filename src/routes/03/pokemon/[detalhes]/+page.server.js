export async function load({params, fetch}){
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.detalhes}`)
    let pokemon = await res.json()
    return { pokemon }
}