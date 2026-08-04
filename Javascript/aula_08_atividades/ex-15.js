let filmes = [
    {titulo: 'Matrix', ano: 1999, genero: 'Ficção'},
    {titulo: 'Interestelar', ano: 2014, genero: 'Ficção'},
    {titulo: 'Titanic', ano: 1997, genero: 'Romance'},
    {titulo: 'Avatar', ano: 2009, genero: 'Ficção'},
    {titulo: 'Coringa', ano: 2019, genero: 'Drama'}
]
let titulos = filmes.map(function(filmes){
    return filmes.titulo
})
console.log(titulos)
console.log("---//---")
let Ficção=filmes.filter(function(filmes){
    return filmes.genero==='Ficção'
})
console.log(Ficção)
console.log("---//---")
let ano=filmes.find(function(filmes){
    return filmes.ano===1997
})
console.log(ano)
console.log("---//---")
let Maior=filmes.filter(function(filmes){
    return filmes.ano>2000
}).map(function(filmes){
    return filmes.titulo
})
console.log(Maior)