function verificarIdade(idade){
    if (idade>=18){
        return idade="Maior de idade"
    }
    else{
        return idade="Menor de idade"
    }
}
console.log(verificarIdade(15))
console.log(verificarIdade(18))
console.log(verificarIdade(25))