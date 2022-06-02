const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase "word" to equal "WORD"', (done) => {
  uppercase('word', (str) => {
    try {
      expect(str).toEqual('WORD');
      done();
    } catch (error) {
      done(error)
    }
  });
});