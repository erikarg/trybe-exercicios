const sum = require('./sum');

describe('Testa as somas', () => {
  it('Testa a soma de 4 e 5', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it ('Testa a soma de 0 e 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it ('Testa o erro se o parametro 5 for string', () => {
    expect(sum(4, '5')).toThrow(Error('parameters must be numbers'))
  });
});