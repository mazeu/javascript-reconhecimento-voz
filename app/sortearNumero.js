
const menorValor = 15
const maiorValor = 1000
const numeroSecreto = geraNemeroAleatorio()

function geraNemeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

console.log("Numero aleatorio:" + numeroSecreto)

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor