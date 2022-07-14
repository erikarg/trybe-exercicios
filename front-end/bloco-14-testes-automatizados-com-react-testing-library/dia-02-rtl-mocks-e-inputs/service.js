// Função para os exercícios 1, 2 e 3

randomNumber = () => Math.floor(Math.random() * 101);

// Funções para o exercício 4

lowerCaseToUpperCase = (string) => string.toUpperCase();

returnFirstLetter = (string) => string.charAt(0);

concatenateStrings = (stringOne, stringTwo) => stringOne.concat(stringTwo);

module.exports = {
  randomNumber,
  lowerCaseToUpperCase,
  returnFirstLetter,
  concatenateStrings,
};
