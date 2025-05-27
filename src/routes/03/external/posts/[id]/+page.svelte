<script>
  let { data } = $props();
</script>

<div class="container-md bg-dark rounded-3 align-self-center">
    <h1 class="text-light text-wrap fs-3 text-center">{data.postagem.title}</h1><br>
    <p class="text-light text-wrap fs-5 text-left">{data.postagem.body}</p>
</div>
<center><h1 style="margin: 3%;">COMENTÁRIOS:</h1></center>
{#each data.comentarios as comentario}
    <div class="container-md bg-dark rounded-3 align-self-center">
        <h1 class="text-light text-wrap fs-3 text-center">{comentario.name}</h1><br>
        <p class="text-light text-wrap fs-5 text-left">{comentario.body}</p>
    </div>
{/each}