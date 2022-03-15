// Exercicio 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const saudacoes = ['Olá'];

const [saudacao] = saudacoes;

console.log(saudacao);