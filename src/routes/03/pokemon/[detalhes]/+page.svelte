<script>
    import { goto } from '$app/navigation';

    let { data } = $props()
    let pokemon = data.pokemon
</script>

<div class="container-fluid">
    <img src={pokemon.sprites.front_default} class="rounded mx-auto d-block" alt="" width="10%" height="10%">
    <center>
        <h4>{pokemon.name.toUpperCase()}</h4>
        {#each pokemon.types as type}
            <span class="badge text-bg-primary m-2 badges-custom">{type.type.name.toUpperCase()}</span>
        {/each}
        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>
    </center>
</div>

<div class="position-absolute top-50 start-50 translate-middle mt-5">
    <button type="button" class="btn btn-info" onclick={() => goto("/03/pokemon")}>Voltar</button>
</div>

<style>
    .badges-custom {
        width: 5%;
    }
</style>