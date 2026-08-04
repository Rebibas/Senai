let frutas = ['maçã', 'banana', 'laranja', 'uva']

let letra=frutas.find(function(frutas){
    return frutas.startsWith("l")
})
console.log(letra)