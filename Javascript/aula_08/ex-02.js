let alunos = [{nome: "Igor", nota:9},
    {nome: "Caetano", nota:67}
]

let nomes = alunos.map(function(aluno){
    return aluno.nome 
})

console.log (nomes)