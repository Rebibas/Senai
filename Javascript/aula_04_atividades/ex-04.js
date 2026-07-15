let produto={
    nome:"geladeira",preco:1999.99,disponivel:true
}
for(let chave in produto){
    console.log(`${chave}:${ typeof produto[chave]}`)
}