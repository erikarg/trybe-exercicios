// Exercício 1 

const dados = (name) => { 
  const info = {
  nomeCompleto: name,
  email: name.replace(' ', '_') + `${'@trybe.com'}`,
  };
  return info;
};

const newEmployees = () => {
  const employees = {
    id1: dados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: dados('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: dados('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(dados)); 

// Agradecimentos ao Isaac Almeida por traduzir o enunciado do exercicio

// Exercício 2

const checkResult = (meuNumero, numero) => meuNumero === numero;

const lotteryResult = (meuNumero, func) => {
  const numero = Math.floor((Math.random() * 5) + 1);
  return func(meuNumero, numero) ? 'Parabéns, você ganhou!' : 'Tente novamente!';
};
console.log(lotteryResult(3, checkResult));

// Exercício 3

const respostas_corretas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas_alunos = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareRespostas = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const contadorDePontos = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const actionReturn = action(rightAnswers[i], studentAnswers[i]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(contadorDePontos(respostas_corretas, respostas_alunos, compareRespostas));

// Créditos ao gabarito da Trybe