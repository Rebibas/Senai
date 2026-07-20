let num1=10
let num2=0
let operador="u"

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

//SIM&&SIM=Sim    SIM&&Não=Não   Não&&sim=Não  &&= ambos tem que estar em acordo

//Sim||SIM=Sim Sim||Não=Sim Não||Sim=Sim ||=OU

// Não ! sim = não      Não ! não = sim   !var