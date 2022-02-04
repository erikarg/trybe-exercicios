// Exercicio 1
const a = 4;
const b = 9;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Exercicio 2
const primeira = 55;
const segunda = 78;

if (primeira > segunda) {
    console.log(primeira);
} else {
    console.log(segunda)
}

// Exercicio 3
const first = 55;
const second = 78;
const third = 573;

if (first > second && first > third) {
    console.log(first);
} else if (second > first && second > third) {
    console.log(second);
} else {
    console.log(third);
}

// Exercicio 4
const incognita = -77;

if (incognita < 0)  {
    console.log("negative");
} else if (incognita > 0) {
    console.log("positive");
} else {
    console.log("zero");
}

// Exercicio 5
const primeiroAngulo = 60;
const segundoAngulo = 60;
const terceiroAngulo = 88;
const x = 180;

if (primeiroAngulo+segundoAngulo+terceiroAngulo === 180) {
    console.log(Boolean(true));
} else if (primeiroAngulo+segundoAngulo+terceiroAngulo !== 180) {
    console.log(Boolean(false));
} else {
    console.log("Erro")
}

// Exercicio 6
const peçaDoJogo = 'torre';

switch (peçaDoJogo) {
  case 'rainha':
    console.log('Diagonal, horizontal e vertical')
    break;
  case 'rei':
    console.log('Uma casa para qualquer direção')
    break;
  case 'torre':
    console.log('Horizontal e vertical')
    break;
  case 'cavalo':
    console.log('Movimento em "L". Pode pular peças')
    break;
  case 'peão':
    console.log('Uma casa por vez, para frente. Na primeira jogada pode se mover até 2 casas.')
    break;
  case 'bispo':
    console.log('Diagonal')
    break;
  default:
    console.log('Erro - peça não localizada')
    break;
};

// Exercicio 7
const porcentagem = 89;

if (porcentagem > 100 || porcentagem < 0) {
  console.log("Erro - nota inválida");
  } else if (porcentagem >= 90) {
  console.log("A");
  } else if (porcentagem >= 80) {
  console.log("B");
  } else if (porcentagem >= 70) {
  console.log("C");
  } else if (porcentagem >= 60) {
  console.log("D");
  } else if (porcentagem >= 50) {
  console.log("E");
  } else { 
    console.log("F");
  }

// Exercicio 8
const numero1 = 39;
const numero2 = 43;
const numero3 = 87;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
  console.log("true")
} else {
  console.log("false")
}

// Exercicio 9
const numero4 = 39;
const numero5 = 43;
const numero6 = 87;

if (numero4 % 2 === 0 || numero5 % 2 === 0 || numero6 % 2 === 0) {
  console.log("false")
} else {
  console.log("true")
}

// Exercicio 10
const custo = 597;
const venda = 1855;

if (custo >= 0 && venda >= 0) {
  const custoTotal = custo*1.2;
  const lucro = (venda-custoTotal)*1000;
  console.log(lucro)
} else {
  console.log("Erro - o valor não pode ser negativo")
}

// Exercicio 11
let aliquotaINSS;
let aliquotaIR;
let salarioBruto = 8950;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11
} else {
  aliquotaINSS = 570.88;
}

let baseSalarial = salarioBruto - aliquotaINSS;

if (baseSalarial <= 1903.98) {
  aliquotaIR = 0;
} else if (baseSalarial <= 2826.65) {
  aliquotaIR = (baseSalarial*0.075) - 142.80;
} else if (baseSalarial <= 3751.05) {
  aliquotaIR = (baseSalarial*0.15) - 354.80;
} else if (baseSalarial <= 4664.68) {
  aliquotaIR = (baseSalarial*0.225) - 636.13;
} else {
  aliquotaIR = (baseSalarial*0.275) - 869.36;
}

console.log("Salário líquido:" + (baseSalarial-aliquotaIR))
