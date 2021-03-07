let spanProjeto = document.querySelector("#resposta");
let inputValorHora = document.querySelector("#valor-hora");
let inputHorasProjeto = document.querySelector("#horas-projeto");


function calcularProjeto() {
    let precoHora = inputValorHora.valueAsNumber;
    let projetoValor = (inputHorasProjeto.valueAsNumber*precoHora).toFixed(2);
    spanProjeto.textContent = "R$" + projetoValor;
    
}
