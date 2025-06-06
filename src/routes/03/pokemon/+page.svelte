<script>
  import { types } from '$lib/data.js';
  let { data } = $props();
  let page = $state(data.pagePast);
  let limit = $state(data.limitPast);
  let name = $state(data.namePast);
  let filtrarTipo = $state(data.typeLast);

  function anterior() {
    if (page <= 1) return;
    page -= 1;
  }

  function proximo() {
    page += 1;
  }
</script>

<form action="/03/pokemon">
  <div class="row mt-2 mb-5">
    <input
      type="text"
      class="form-control w-50 position-absolute start-50 translate-middle-x"
      placeholder="Digite o nome do pokémon"
      name="name"
      bind:value={name}
    />
  </div>
  <div class="row mt-2 mb-3">
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input
      style="visibility: hidden; position: absolute;"
      class="text-center border border-0"
      readonly
      name="tipo"
      bind:value={filtrarTipo}
      />
      {#each types as type}
        <input type="radio" class="btn-check" autocomplete="off" checked={filtrarTipo == type.value} onclick={() => filtrarTipo = type.value}/>
        <label class="btn btn-outline-primary" for="btnradio1">{type.name}</label>
      {/each}
    </div>
  </div>

  <div class="container mb-5">
    <button class='btn btn-primary w-50 text-center position-absolute start-50 translate-middle-x'>Filtrar</button>
  </div>

  <div class="row">
    {#each data.pokemons as p}
      <div class="col-md-3 col-sm-6 mb-3 mt-5">
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

  <div class="container text-center">
    <button class="btn btn-primary m-3" onclick={() => anterior()}>ANTERIOR</button>
    <input class="w-5 text-center border border-0" readonly name="page" bind:value={page} />
    <button class="btn btn-primary m-3" onclick={() => proximo()}>PRÓXIMO</button>
    <p>Quantidade de pokémons por página:</p>
    <input
      style="visibility: hidden; position: absolute;"
      class="text-center border border-0"
      readonly
      name="limit"
      bind:value={limit}
    />
    <button class={limit == 12 ? 'btn btn-primary m-1' : 'btn btn-outline-primary'} onclick={() => (limit = 12)}>12</button>
    <button class={limit == 24 ? 'btn btn-primary m-1' : 'btn btn-outline-primary'} onclick={() => (limit = 24)}>24</button>
    <button class={limit == 36 ? 'btn btn-primary m-1' : 'btn btn-outline-primary'} onclick={() => (limit = 36)}>36</button>
  </div>
</form>

<style>
  input {
    width: 6%;
    outline: 0;
  }
</style>
