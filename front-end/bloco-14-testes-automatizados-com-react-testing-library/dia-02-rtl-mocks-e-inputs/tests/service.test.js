// Exercício 1

test('Utilizando mock, verifica se a função foi chamada', () => {
  randomNumber = jest.fn();
  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
});

test('Com o retorno padrão 10, verifica qual é o retorno da função', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  expect(randomNumber()).toBe(10);
});

test('Com o retorno padrão 10, verifica quantas vezes foi chamada', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  randomNumber();
  randomNumber();
  randomNumber();
  expect(randomNumber).toHaveBeenCalledTimes(3);
});

// Exercício 2

test('Testa se a função foi chamada, se a sua nova implementação foi aplicada e se a aplicação ocorre apenas uma vez', () => {
  randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  randomNumber(15, 3);
  expect(randomNumber(15, 3)).toBe(5);

  randomNumber.mockReset();
  expect(randomNumber(15,3)).toBe(undefined);
  expect(randomNumber).toHaveBeenCalledTimes(1);
});

// Exercício 3

test('Testa se a nova implementação recebe três parâmetros, retorna a multiplicação deles, reseta a implementação e crie uma nova que recebe um parâmetro e retorna o dobro', () => {
  randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  randomNumber(2, 5, 9);
  expect(randomNumber(2, 5, 9)).toBe(90);

  randomNumber.mockReset();
  randomNumber = jest.fn().mockImplementation((a) => a * a);
  expect(randomNumber(235)).toBe(55225);
  expect(randomNumber).toHaveBeenCalledTimes(1);
});
