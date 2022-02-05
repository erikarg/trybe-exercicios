// Exercício 1

function Fatorial(x){
  let resultado = x;
  for (var i=1; i < x; i+=1) {
    resultado = resultado*i;
  }
  return resultado;
}
console.log(Fatorial(10))

// Exercício 2

let word = 'tryber'

console.log(word.split("").reverse("").join(""))

// Exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0];
let maiorPalavra = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index] > maiorPalavra) {
    maiorPalavra = array[index]
  }
}
console.log(maiorPalavra)


for (let index = 1; index < array.length; index += 1) {
  if (array[index] <= menorPalavra) {
    menorPalavra = array[index]
  }
}
console.log(menorPalavra)

// Exercício 4 

let maiorPrimo = 0;

for (let numeroAtual = 0; numeroAtual <= 50; numeroAtual += 1) {
  let éPrimo = true;
  for (let divisor = 2; divisor < numeroAtual; divisor += 1) {
    if (numeroAtual % divisor === 0) { 
      éPrimo = false;
    }
  } 
    if (éPrimo) {
      maiorPrimo = numeroAtual;
    }
  }
  console.log(maiorPrimo)


