function verificaSeONumeroEValido() {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor invalido</div>";
    return
  }

  if (numeroForMaiorOuMenorQuePermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor invalido, o numero precisa estar entre ${menorValor} e ${maiorValor} !</div>`;
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Voce acertou!</h2>
    <h3>O numero secreto era ${numeroSecreto}</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `;
  }else if(numero > numeroSecreto){
elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>`
  }else {
    elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>`
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQuePermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e =>{
  if(e.target.id == 'jogar-novamente'){
    window.location.reload()
  }
})