let numeros = [5, 12, 8, 21, 3, 15, 7]

let Maior = numeros.filter(function(numeros){
    return numeros>100
})
console.log(Maior.length) //sem o length aparece somente [], com o lenght aparece 0