let mensagem = "Global"
function testarEscopo(){
    mensagem= "Local"
    console.log(mensagem)
}
testarEscopo()
console.log(mensagem)//se não rodar a função a variavel vai continuar sendo contada como global
                    //Se rodar a função a variavel vai ser alterada dentro da função E fora