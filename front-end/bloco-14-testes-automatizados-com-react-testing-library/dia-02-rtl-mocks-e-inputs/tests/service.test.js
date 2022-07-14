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
