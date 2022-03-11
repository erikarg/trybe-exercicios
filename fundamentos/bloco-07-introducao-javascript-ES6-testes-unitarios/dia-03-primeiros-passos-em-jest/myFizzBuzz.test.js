const myFizzBuzz = require('./myFizzBuzz');

describe('Chamadas com numeros diferentes', () => {
  it('Numero divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it('Numero divisivel por 3', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });
  it('Numero divisivel por 5', () => {
    expect(myFizzBuzz(25)).toEqual('buzz');
  });
  it('Numero que não é divisivel por 3 e 5', () => {
    expect(myFizzBuzz(23)).toEqual(23);
  });
  it('Caractere que não é numero', () => {
    expect(myFizzBuzz('teste')).toEqual(false);
  });
});
