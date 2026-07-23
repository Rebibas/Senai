function listarnomes(array){
    array.forEach(function(item,indice){
        console.log(`${indice}:${item}`)
    })
}
listarnomes(["Igor","Caiã","Ana"])