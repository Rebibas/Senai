let filmes=[
{titulo:"pequena sereia", ano:1994, genero:"fantasia"},
{titulo:"divertidamente", ano:2016, genero:"fantasia"},
{titulo:"shrek", ano:2001, genero:"fantasia"}
]
filmes.forEach(function(filmes) {
    console.log(`O filme ${filmes.titulo} foi lançado em ${filmes.ano} e pertence ao genero de ${filmes.genero}`)
})
