let btnAcao=document.querySelector("#btnAcao");
let infoBotao=document.querySelector("#infoBotao");

btnAcao.addEventListener("click",function(){
    infoBotao.textContent=btnAcao.textContent
})