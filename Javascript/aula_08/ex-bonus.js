let produtos=[
    {id:1, nome:"Vasilina", preco:35, categoria:"Limpeza"},
    {id:2, nome:"Oreo", preco:12, categoria:"Comida"},
    {id:3, nome:"Feijao", preco:10, categoria:"Comida"},
    {id:4, nome:"Mina terrestre", preco:150, categoria:"Kaboom"},
    {id:5, nome:"Glauber", preco:1500, categoria:"Anão minerador"}
]
let nomes=produtos.map(function(item){
    return item.nome
})
console.log(nomes)
console.log("---//---")
let comidas=produtos.filter(function(item){
    return item.categoria === "Comida"
})
console.log(comidas)
console.log("---//---")
let ids=produtos.find(function(item){
    return item.id === 5
})
console.log(ids)
console.log("---//---")
let nomesP= produtos.filter(function(item){
    return item.preco>90
}).map(function(item){
    return item.nome
})
console.log(nomesP)
