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