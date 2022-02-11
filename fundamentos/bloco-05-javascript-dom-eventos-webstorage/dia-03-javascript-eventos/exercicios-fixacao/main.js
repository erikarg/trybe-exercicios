const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Resposta: pois essa li está configurada separadamente, em uma classe diferente das outras, e recebeu personalização para isso.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

const listaDeLi = document.getElementById('second-li', 'third-li')

listaDeLi.addEventListener("click", adicionaClasse);

function adicionaClasse() {

const teste1 = secondLi.className = "tech";
const teste2 = thirdLi.className = "tech";

}

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

listaDeLi.removeEventListener("click", adicionaClasse);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

const classeInput = document.getElementById('input');

classeInput.addEventListener("input", alteraTexto);

function alteraTexto() {

    var x = document.getElementById('input').value;
    firstLi.innerHTML = x;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

const clicando = document.getElementsByTagName('h3')[0];

clicando.addEventListener("dblclick", redirecionaPagina);

function redirecionaPagina() {

    var y = document.getElementsByTagName('h3')[0];
    location.replace("https://www.betrybe.com");

}

// 4.1. Que tal redirecionar para seu portfólio?


clicando.addEventListener("dblclick", redirecionaPagina1);

function redirecionaPagina1() {

    var y = document.getElementsByTagName('h3')[0];
    location.replace("https://github.com/erikarg");

}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

clicando.addEventListener("mouseover", mouseOver);
clicando.addEventListener("mouseout", mouseOut);

function mouseOver() {

    clicando.style.color = "yellow";
}

function mouseOut() {

    clicando.style.color = "white";
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.