let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

for (let value in info) {
    console.log('Bem-vinda, ' + info.personagem)
};

for (let object in info) {
    console.log(object+':', info[object]+';')
};

for (let keys in info) {
    console.log(keys)
};

for (let content in info) {
    console.log(info[content]);
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

for (let juncao in info, info2) {
    console.log(info[juncao]+ ' e ' + info2[juncao])
};

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  for (let value in leitor) {
      console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + "'" + leitor.livrosFavoritos[0].titulo + "'.")
  };

leitor.livrosFavoritos.push( {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });

console.log(leitor);

for (let livros in leitor) {
    console.log('Julia tem ' + leitor.livrosFavoritos.length+ ' livros favoritos.')
};
