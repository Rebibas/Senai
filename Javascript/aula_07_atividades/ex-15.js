function somar(a,b){
    return a+b
}
function subtrair(a,b){
    return a-b
}
function multiplicar(a,b){
    return a*b
}
function dividir(a,b){
    if(b==0){
        return "Erro: divisão por zero"
    }
    else{
        return a/b;
    }
}
console.log(`4+2=${somar(4,2)}`);
console.log(`4-2=${subtrair(4,2)}`);
console.log(`4*2=${multiplicar(4,2)}`);
console.log(`4/2=${dividir(4,2)}`);
console.log(`4/0=${dividir(4,0)}`)

