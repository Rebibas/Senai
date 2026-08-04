let celsius = [0, 15, 30, 45]

let fahrenheit=celsius.map(function(celsius){
    return celsius*9/5 + 32
})
console.log(fahrenheit)