let biblioteca=[
    {titulo:'caraval',autor:'Stephanie Garber', paginas:352, lido:true,editora:'selo Gutenberg'},
    {titulo:'lendario',autor:'Stephanie Garber',paginas:400, lido:true,},
    {titulo:'finale',autor:'Stephanie Garber',paginas:400, lido:false},
    {titulo:'asas de fogo',autor:'Tui T. Sutherland',paginas:336,lido:true,editora:'Inside Books'}
]

biblioteca.forEach(function(biblioteca){
  console.log(`Título: ${biblioteca.titulo}, Autor: ${biblioteca.autor}`);
});

console.log("Propriedades do primeiro livro:", Object.keys(biblioteca[0]));

for (let chave in biblioteca[0]) {
  console.log(`${chave}: ${biblioteca[0][chave]}`);
}

biblioteca.forEach(function(biblioteca) {
  if ("editora" in biblioteca) {
    console.log(`O livro "${biblioteca.titulo}" possui editora.`);
  } else {
    console.log(`O livro "${biblioteca.titulo}" não possui editora.`);
  }
});
biblioteca.forEach(function(biblioteca){
  if (!("editora" in biblioteca)) {
    biblioteca.editora = "Editora Infantil";
  }
});

console.log("Array atualizado:", biblioteca);