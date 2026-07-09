//exemplo 1
let nomes = ['Ana', 'Bruno', 'Carla'];

console.log("0-"+nomes[0])
console.log("0-"+nomes[1])
console.log("0-"+nomes[2])
//exemplo 2
let nomess = ['Ana', 'Bruno', 'Carla'];

nomes.forEach(function(item, indice) {
  console.log(`${indice}: ${item}`);
});