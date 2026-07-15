let amigos = [
  { nome: "Pedro", idade: 18 },
  { nome: "lucas", idade: 26 },
  { nome: "Gustavo", idade: 16 },
  { nome: "Marcio", idade: 59 }
]

let maior=[]

amigos.forEach(function(amigos){
    if(amigos.idade >= 18) {
        maior.push(amigos)
    }
})

console.log(maior)