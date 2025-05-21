const posts = [
    { slug: 'um', title: 'Primeiro Post', publish_date: '2025-03-12', content: 'Conteúdo do primeiro post' },
    { slug: 'outro', title: 'Outro Post', publish_date: '2025-03-25', content: 'Conteúdo do outro post' },
    { slug: 'algum', title: 'Mais um Post', publish_date: '2024-11-22', content: 'Conteúdo de mais um post' },
    { slug: 'ainda', title: 'Ainda Outro Post', publish_date: '2024-11-02', content: 'Conteúdo de ainda outro post' }
  ];

export function getAll(){
  return posts
}
  
export function getByYearMonth(ano, mes){
  return posts.filter((post) => post.publish_date.slice(0, 4) == ano && post.publish_date.slice(5, 7) == mes )
}

export function getBySlug(slug){
  return posts.filter((post) => post.slug == slug)
}

export function getByQuery(title, content){
  return posts.filter((post) => post.title == title || post.content == content)
}