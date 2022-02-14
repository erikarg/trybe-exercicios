const teste = document.createElement("p"); // cria um elemento parágrafo
const teste2 = document.createTextNode("Esse é o filho do elementoOndeVoceEsta"); // adiciona um texto ao parágrafo (obrigatório)
teste.appendChild(teste2, elementoOndeVoceEsta); // anexa o texto no paragrafo
elementoOndeVoceEsta.appendChild(teste); // inclui o filho no elemento

const teste3 = document.createElement("p");
const teste4 = document.createTextNode("Esse é o filho do primeiro filho do filho");
teste3.appendChild(teste4, primeiroFilhoDoFilho);
primeiroFilhoDoFilho.appendChild(teste3);

document.getElementsByName('teste3');

let Remocao = document.querySelectorAll('paiDoPai');
for (let index = 0; index < Remocao; index += 1); {
    let element = Remocao[index];
if (element.innerHTML.includes('primeiroFilho', 'segundoEUltimoFilhoDoFilho', 'terceiroFilho', 'quartoEUltimoFilho')) {
    paiDoPai.removeChild(element);
}
}

