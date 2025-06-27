import { fail, redirect } from "@sveltejs/kit";

export const actions = {
    atualizarPerfil: async ({ request }) => {
        const data = request.formData()
        const nome = data.get('nome')
        const email = data.get('email')
        const senhaAtual = data.get('senha')
        if(email == '') return fail(400, { error: 'O campo de email deve ser preenchido.' })
        if(nome == '') return fail(400, { error: 'O campo de nome deve ser preenchido.' })
        if(senhaAtual == '') return fail(400, { error: 'O campo de senha atual deve ser preenchido.' })
        redirect(303, '/07/perfil?status=perfil_atualizado')
    },
}