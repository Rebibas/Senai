const frase=document.querySelector("h2")
const btn=document.querySelector("button")
const analise=document.querySelector("#analise")

btn.addEventListener("click",function(){
    let primeiraDiv = document.createElement("div");
    primeiraDiv.textContent=frase.textContent;
    analise.appendChild(primeiraDiv);

    let segundaDiv=document.createElement("div");
    segundaDiv.textContent=frase.style.color;
    segundaDiv.style.color=frase.style.color;
    analise.appendChild(segundaDiv);

    let terceiraDiv=document.createElement("div");
    terceiraDiv.textContent=frase.innerHTML;
    analise.appendChild(terceiraDiv);
})
