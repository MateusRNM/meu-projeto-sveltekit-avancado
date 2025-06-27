<form method="POST">
    Nome: <input type="text" name="nome" /><br>
    Email: <input type="email" name="email" /><br>
    Senha atual: <input type="password" name="senha" /><br>
    Nova senha: <input type="password" name="novasenha" /><br>
    Confirmar Nova Senha: <input type="password" name="confirmarnovasenha" /><br>
    Confirmar Desativação da Conta: <input type="checkbox" name="confirmardesativacao" /><br>
    <button formaction="atualizarPerfil">Salvar Alterações</button><br>
    <button formaction="alterarSenha">Alterar Senha</button><br>
    <button formaction="desativarConta">Desativar Minha Conta</button>
</form>