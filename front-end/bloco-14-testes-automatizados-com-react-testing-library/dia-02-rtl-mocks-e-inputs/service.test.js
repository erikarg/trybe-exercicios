const service = require('./service.js');

// Exercício 1

test('Utilizando mock, verifica se a função foi chamada', () => {
  service.randomNumber = jest.fn();
  service.randomNumber();
  expect(service.randomNumber).toHaveBeenCalled();
});

test('Com o retorno padrão 10, verifica qual é o retorno da função', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);
  expect(service.randomNumber()).toBe(10);
});

test('Com o retorno padrão 10, verifica quantas vezes foi chamada', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);
  service.randomNumber();
  service.randomNumber();
  service.randomNumber();
  expect(service.randomNumber).toHaveBeenCalledTimes(3);
});

// Exercício 2

test('Testa se a função foi chamada, se a sua nova implementação foi aplicada e se a aplicação ocorre apenas uma vez', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  service.randomNumber(15, 3);
  expect(service.randomNumber(15, 3)).toBe(5);

  service.randomNumber.mockReset();
  expect(service.randomNumber(15, 3)).toBe(undefined);
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

// Exercício 3

test('Testa se a nova implementação recebe três parâmetros, retorna a multiplicação deles, reseta a implementação e crie uma nova que recebe um parâmetro e retorna o dobro', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  service.randomNumber(2, 5, 9);
  expect(service.randomNumber(2, 5, 9)).toBe(90);

  service.randomNumber.mockReset();
  service.randomNumber = jest.fn().mockImplementation((a) => a * a);
  expect(service.randomNumber(235)).toBe(55225);
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

// Exercício 4 - A, B e C

test('Testa se a nova implementação da primeira função retorna a string em caixa baixa', () => {
  const mockLowerCaseToUpperCase = jest
    .spyOn(service, 'lowerCaseToUpperCase')
    .mockImplementation((string) => string.toLowerCase());
  expect(mockLowerCaseToUpperCase('TESTANDO')).toBe('testando');

  expect(service.lowerCaseToUpperCase).toHaveBeenCalledTimes(1);
  expect(service.lowerCaseToUpperCase).toHaveBeenCalledWith('TESTANDO');

  service.lowerCaseToUpperCase.mockRestore();
  expect(service.lowerCaseToUpperCase('testando')).toBe('TESTANDO');
});

test('Testa se a nova implementação da segunda função retorna a última letra de uma string', () => {
  const mockReturnFirstLetter = jest
    .spyOn(service, 'returnFirstLetter')
    .mockImplementation((string) => string.slice(-1));
  expect(mockReturnFirstLetter('Acho que deu bom')).toBe('m');
  expect(service.returnFirstLetter).toHaveBeenCalledTimes(1);
  expect(service.returnFirstLetter).toHaveBeenCalledWith('Acho que deu bom');
});

test('Testa se a nova implementação da terceira função recebe três strings e as concatena', () => {
  const mockConcatenateStrings = jest
    .spyOn(service, 'concatenateStrings')
    .mockImplementation((stringOne, stringTwo, stringThree) =>
      stringOne.concat(stringTwo, stringThree)
    );
  expect(mockConcatenateStrings('Bora', 'que', 'bora')).toBe('Boraquebora');
  expect(service.concatenateStrings).toHaveBeenCalledTimes(1);
  expect(service.concatenateStrings).toHaveBeenCalledWith(
    'Bora',
    'que',
    'bora'
  );
});
