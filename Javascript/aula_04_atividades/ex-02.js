let pessoa={
    nome:"Geraldo", idade: 2, altura: 30, estudante:false
}
for(let chave in pessoa){
    console.log(`${chave}:${pessoa[chave]}`)
}