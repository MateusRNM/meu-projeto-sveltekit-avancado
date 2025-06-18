function contem(senha, caracteres){
    for(let char of caracteres){
        if(senha.includes(char)) return true
    }
    return false
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const dados = {
            nome: data.get('nome'),
            email: data.get('email'),
            nascimento: data.get('nascimento'),
            senha: data.get('senha'),
            confirmacaosenha: data.get('confirmacaosenha'),
            erros: []
        }

        if(!dados.nome || !dados.email || !dados.nascimento || !dados.senha || !dados.confirmacaosenha) dados.erros.push('Preencha todos os campos.')
        if(!dados.email.includes('@')) dados.erros.push('Email inválido.')
        if(dados.senha != dados.confirmacaosenha) dados.erros.push('Senhas não conferem.')
        if(!contem(dados.senha, "abcdefghijklmnopqrstuvwxyz") || !contem(dados.senha, "ABCDEFGHIJKLMNOPQRSTUVWXYZ") || !contem(dados.senha, "0123456789") || !contem(dados.senha, "!@#$%¨&*()-_=+")) dados.erros.push('Senha inválida.')

        let atual = new Date()
        let nasc = new Date(dados.nascimento)
        if(atual - nasc < 378691200000) dados.erros.push('Você ainda não completou 12 anos.')

        return { success: true, dados }
    }
}