<script>
    let { form } = $props()
</script>

<div class="container overflow-auto">
    <form method="POST">
        <div class="mt-3">
            <label for="inputPassword1" class="form-label">Nome do produto:</label>
            <input type="text" id="inputPassword1" class="form-control mb-3" aria-describedby="passwordHelpBlock" name="nome" value={form?.dados.nome || ''}>
    
            <label for="inputPassword2" class="form-label">Preço do produto:</label>
            <input type="number" class="form-control" name="preco" value={form?.dados.preco || ''}>

            <label for="inputPassword2" class="form-label">Quantidade:</label>
            <input type="number" class="form-control" name="quantidade" value={form?.dados.quantidade || ''}>
    
            <button class="btn btn-primary position-absolute start-50 translate-middle-x mt-3">CADASTRAR PRODUTO</button>
        </div>
    </form>
    
    <div style="margin-top: 25%;" class="container">
        {#if form?.error}
            <p style="color: red;">{form?.error}</p>
        {:else if form?.dados}
            {`Produto ${form?.dados.nome} cadastrado com sucesso!`}
        {/if}
    </div>
</div>