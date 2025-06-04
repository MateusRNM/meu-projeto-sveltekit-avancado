<script>
    import { derived } from 'svelte/store';

  let { data } = $props();
  let page = $state(1)
  let limit = $state(12);

  function anterior(){
    if(page <= 1) return
    page -= 1
  }

  function proximo(){
    page += 1
  }
</script>

<div class="row">
  {#each data.pokemons as p}
    <div class="col-md-3 col-sm-6 mb-3">
      <div class="card">
        <img src={p.image} alt={p.name} class="card-img-top" />
        <div class="card-body">
          <a href="/03/pokemon/{p.name}" class="stretched-link text-decoration-none">
            <h5 class="card-title text-capitalize">{p.name}</h5>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>

<form action={`/03/pokemon`}>
  <div class="container text-center">
    <button class="btn btn-primary m-3" onclick={() => anterior()}>ANTERIOR</button>
    <input class="w-5 text-center border border-0" disabled={true} name="page" bind:value={page}/>
    <button class="btn btn-primary m-3" onclick={() => proximo()}>PRÓXIMO</button>
    <p>Quantidade de pokémons por página:</p> <input class="text-center border border-0" name="limit" disabled={true} bind:value={limit}/>
  </div>
</form>


<style>
  input {
    width: 6%;
  }
</style>
