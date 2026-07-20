let num1 = 15
let num2 = 5
let operador = '/'

switch(operador){
    case"+":
        console.log(num1+num2);
        break
    case "-":
        console.log(num1-num2);
        break
    case"*":
        console.log(num1*num2);
        break
    case"/":
        if(num2==0){
            console.log("o numero não tem divisão")
        }
        else{
         console.log(num1/num2)
        }
        break
    default:
        console.log("Error 404")
}