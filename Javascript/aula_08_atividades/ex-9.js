let produtos = [
    {nome: 'Mouse', preco: 50}, 
    {nome: 'Teclado', preco: 120}, 
    {nome: 'Monitor', preco: 800}
]
let Maior = produtos.filter(function(produtos){
    return produtos.preco>60
})
console.log(Maior)