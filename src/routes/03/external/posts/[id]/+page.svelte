<script>
  let { data } = $props();
</script>

<div class="container-md col border border-black position-absolute top-50 start-50 translate-middle p-3">
    <div class="row border border-black">
        <center><h1>{data.postagem.title}</h1></center>
        <p>{data.postagem.body}</p>
    </div>
    <center><h3 class="mt-5 mb-5">Comentários:</h3></center>
    <div class="row border border-black">
        {#each data.comentarios as comentario}
            <center><h4>{comentario.name}</h4></center>
            <p class="fs-6">{comentario.body}</p>
        {/each}
    </div>
</div>