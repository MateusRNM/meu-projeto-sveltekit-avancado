export async function load({ params, fetch }){
    let postagem = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    postagem = await postagem.json()
    let comentarios = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`)
    comentarios = await comentarios.json()
    return { postagem, comentarios }
}