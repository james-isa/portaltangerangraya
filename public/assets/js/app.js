fetch("/api/posts")
.then(r=>r.json())
.then(posts=>{
  const el = document.getElementById("content")
  posts.forEach(p=>{
    el.innerHTML += `
    <article>
      <h2><a href="/${p.slug}.html">${p.title}</a></h2>
      <small>${p.date} | ${p.category}</small>
      <p>${p.content.substring(0,150)}...</p>
    </article>`
  })
})
