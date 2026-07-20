let valorCompra=10
if(valorCompra>=500){
    console.log(`Sua compra ultrapassou R$500, lhe daremos um desconto de 20%, o valor final ficou R$:${valorCompra*0.8}`)
}
else if(valorCompra>=200){
    console.log(`Sua compra ultrapassou R$200, lhe daremos um desconto de 10%, o valor final ficou R$:${valorCompra*0.9}`)
}
else if(valorCompra>=100){
    console.log(`Sua compra ultrapassou R$100, lhe daremos um desconto de 5%, o valor final ficou R$:${valorCompra*0.95}`)
}
else{
    console.log(`valor final da compra: R$${valorCompra}`)
}