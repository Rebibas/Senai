let valores = [10, 25, 8, 42, 15, 3, 30]

let triplo=valores.filter(function(valores){
    return valores>15
}).map(function(valores){
    return valores*3
})
console.log(triplo)