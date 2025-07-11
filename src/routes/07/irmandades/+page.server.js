import { fail, redirect } from "@sveltejs/kit";

export const actions = {
    guerreiros: async ({ request }) => {
        const data = await request.formData()
        const nascimento = data.get('nascimento')
        const forca = data.get('forca')
        if(forca < 7) return fail(400, { error: 'Precisa ficar mais forte!' })
        const atual = new Date(), aniversario = new Date(nascimento)
        const idade = atual - aniversario
        if(idade < 568036800000) return fail(400, { error: 'Precisa de ao menos 18 anos.' })
        redirect(303, '/07/irmandades/guerreiros')
    },
    magos: async ({ request }) => {
        const data = await request.formData()
        const nascimento = data.get('nascimento')
        const inteligencia = data.get('inteligencia')
        const magia = data.get('magia')
        if(inteligencia < 8) return fail(400, { error: 'Precisa estudar mais!' })
        if(magia != 'on') return fail(400, { error: 'Sem conhecimentos de magia!' })
        const atual = new Date(), aniversario = new Date(nascimento)
        const idade = atual - aniversario
        if(idade < 504921600000) return fail(400, { error: 'Precisa de ao menos 16 anos.' })
        redirect(303, '/07/irmandades/magos')
    },
    artesaos: async ({ request }) => {
        const data = await request.formData()
        const nascimento = data.get('nascimento')
        const destreza = data.get('destreza')
        const ferramentas = data.get('ferramentas')
        if(destreza < 6) return fail(400, { error: 'Precisa melhorar a destreza!' })
        if(ferramentas != 'on') return fail(400, { error: 'Precisa de ferramentas!' })
        const atual = new Date(), aniversario = new Date(nascimento)
        const idade = atual - aniversario
        if(idade < 473364000000) return fail(400, { error: 'Precisa de ao menos 15 anos.' })
        redirect(303, '/07/irmandades/artesaos')
    }
}