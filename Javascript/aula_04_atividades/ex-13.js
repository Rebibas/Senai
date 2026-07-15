let amigos = [
  { nome: "Pedro", idade: 16 },
  { nome: "Asper", idade: 16 },
  { nome: "Gustavo", idade: 16 },
  { nome: "Eduardo", idade: 15 }
]
amigos.forEach(function(amigos) {
  console.log(`Nome: ${amigos.nome}, Idade: ${amigos.idade}`);
});