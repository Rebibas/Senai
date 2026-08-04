let num = [3,4,6,8,10]
let dobrados = num.map(function(num) {
  return num * 2;
});
console.log(dobrados);

console.log("---//---")

let alunos = [
    {nome: "Igor", nota:9},
    {nome: "Gustavo", nota:67}
]

let nomes = alunos.map(function(aluno){
    return aluno.nome 
})

console.log (nomes)

console.log("---//---")

let numeros = [2,6,30,28,65,11]

let maiores = numeros.filter(function(numeros){
    return numeros>29
})

console.log (maiores)

console.log("---//---")

let estudantes = [
    {nomes: "Ana", notas: 8},
    {nomes:"Bruno", notas: 5}
]

let aprovados = estudantes.filter(function(estudantes){
    return estudantes.notas>=7;
})

console.log (aprovados)

console.log("---//---")

let nums = [2,7,11,35,67,55,42]

let encontrado = nums.find(function(n){
    return n>66
})

console.log (encontrado)

console.log("---//---")

let produtos = [
    {id:1, nome: "celular"},
    {id:2, nome:"computador"}
]

let encontrados = produtos.find(function(item){
    return item.id === 2
})

console.log (encontrados)