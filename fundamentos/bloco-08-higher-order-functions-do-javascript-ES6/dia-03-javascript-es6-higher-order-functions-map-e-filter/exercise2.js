const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const calculoIdade = books.map((book) => ( book.releaseYear - book.author.birthYear ));
const ordenaIdade = calculoIdade.sort((a, b) => a - b);
const extraiNomes = books.map((book) => book.author.name );

function nomeIdade() {
  const expectedResult = [
    {
    age: calculoIdade[0],
    author: extraiNomes[0],
    },
    {
    age: calculoIdade[1],
    author: extraiNomes[1],
    },
    {
    age: calculoIdade[2],
    author: extraiNomes[2],
    },
    {
    age: calculoIdade[3],
    author: extraiNomes[3],
    },
    {
    age: calculoIdade[4],
    author: extraiNomes[4],
    },
    {
    age: calculoIdade[5],
    author: extraiNomes[5],
    },
  ];
  return expectedResult;
};
console.log(nomeIdade());