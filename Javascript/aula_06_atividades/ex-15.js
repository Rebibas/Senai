let valores = [12, 5, 8, 21, 3, 14, 7]
let maior=0
let menor=0
let total=0
let media=0
for(let i=0;i<valores.length;i++){
    total=total+valores[i]
    if(maior<valores[i]){
        maior=valores[i]
    }
    if(i==0){
        menor=valores[i]
    }
    if(menor>valores[i]){
        menor=valores[i]
    }
    if(i==valores.length-1){
        media=total/[i+1]
    }
}

console.log(`maior:${maior} - Menor:${menor} - Total:${total} Media:${media}`)