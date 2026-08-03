let alunos = [
    {nome: "Igor", nota: 9},
    {nome:"Caetano", nota: 6.7}
]

let aprovados = alunos.filter(function(alunos){
    return alunos >= 7
})

console.log (aprovados)