import { fail } from "@sveltejs/kit"

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const dados = {
            nome: data.get('nome') || '',
            preco: data.get('preco') || 0,
            quantidade: data.get('quantidade') || 0,
        }
        if(dados.nome == '') return fail(400, { error: 'Nome obrigatório.', dados })
        if(dados.preco <= 0) return fail(400, { error: 'Preço inválido.', dados })
        if(dados.quantidade < 1) return fail(400, { error: 'Quantidade inválida.', dados })

        return { success: true, dados }
    }
}