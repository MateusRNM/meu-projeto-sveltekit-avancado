<script>
    let { form } = $props()
</script>

<div class="container overflow-auto">
    <form method="POST">
        <div class="mt-3">
            <label for="inputPassword1" class="form-label">Nome</label>
            <input type="text" id="inputPassword1" class="form-control mb-3" aria-describedby="passwordHelpBlock" name="nome" value={form?.dados.nome || ''}>
    
            <label for="inputPassword2" class="form-label">Email</label>
            <input type="email" id="inputPassword2" class="form-control" aria-describedby="passwordHelpBlock" name="email" value={form?.dados.email || ''}>
            <div id="passwordHelpBlock" class="form-text mb-3">
            Digite um email válido.
            </div>
    
            <label for="inputPassword3" class="form-label">Senha</label>
            <input type="password" id="inputPassword3" class="form-control" aria-describedby="passwordHelpBlock" name="senha" value={form?.dados.senha || ''}>
            <div id="passwordHelpBlock" class="form-text mb-3">
            Sua senha deve ter no mínimo 4 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.
            </div>
    
            <label for="inputPassword4" class="form-label">Confirme sua senha</label>
            <input type="password" id="inputPassword4" class="form-control mb-3" aria-describedby="passwordHelpBlock" name="confirmacaosenha" value={form?.dados.confirmacaosenha || ''}>
    
            <label for="inputPassword5" class="form-label">Data de nascimento</label>
            <input type="date" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="nascimento" value={form?.dados.nascimento || ''}>
            <div id="passwordHelpBlock" class="form-text mb-3">
            Você deve ter no mínimo 12 anos de idade.
            </div>
    
            <button class="btn btn-primary position-absolute start-50 translate-middle-x">CADASTRAR</button>
        </div>
    </form>
    
    <div style="margin-top: 25%;" class="container">
        {#if form?.dados.erros.length > 0}
            {#each form.dados.erros as erro}
                <p style="color: red;">{erro}</p>
            {/each}
        {:else if form?.dados}
            Olá, {form?.dados.nome}
        {/if}
    </div>
</div>