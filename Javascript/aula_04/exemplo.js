//exemplo 1

let aluno ={
    nome:'Gustavo', matricula:676742,
}
for(let chave in aluno){
    console.log(`${chave}:${aluno[chave]}`)
}
//exemplo 2

let carros = [
    {marca:"fiat", modelo:"500"},
    {marca:"mercedes", modelo:"C300"},
    {marca:"Citroen", modelo:"C4"},
]
carros.forEach(function(carros){console.log(`Marca:${carros.marca} - ${carros.modelo}`)}); 
 //forEach=looping, o item(local onde tem carros escrito)=quantidade de vezes do looping, EX:
 //carros tem 3 itens dentro ent o looping vai ser 3 vezes

Object.keys(carros)
 //vai mostrar o nome do item ou seja: marca e modelo

Object.values(carros)
 //vai mostrar oque tem dentro do item ex, o nome da marca era fiat, mercedes e citroen

