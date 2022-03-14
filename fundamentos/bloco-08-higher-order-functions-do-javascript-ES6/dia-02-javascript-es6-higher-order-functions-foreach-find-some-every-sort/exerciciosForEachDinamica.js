const estudantes = [
  {
    nome: 'Joel',
    projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Mica',
    projeto: 'Unit test',
    status: 100,
  },
  {
    nome: 'Hugonardo',
    projeto: 'Trybewarts',
    status: 97,
  },
  {
    nome: 'Aninha',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Joicy',
    projeto: 'To do list',
    status: 100,
  },
  {
    nome: 'Ronald',
    projeto: 'Trybewarts',
    status: 75,
  },
];

// 1 - Aqui na Trybe estamos criando um bot que vai dar os parabéns para as pessoas que entregaram 100% dos projetos, esse bot deve imprimir uma msg do tipo: "Olá pessoa, parabéns por ter finalizado 100% do nomeDoPorjeto", para cada pessoa.
const mensagens = (estudantes) => {
  console.log(`Olá ${estudantes.nome}, parabéns por ter finalizado 100% do ${estudantes.projeto}`)
}

  estudantes.forEach((elemento) => {
    if (elemento.status === 100) {
    mensagens(elemento);
    }
  });

// 2 - Depois de algumas ações focadas nas pessoas que ainda não tinham entregue o projeto conseguimos ter 100% de aprovação! As pessoas que ainda não tinham entregue conseguiram os 80% e precisamos atualizar nossos dados e imprimir o novo resultado.

const mensagens2 = (estudantes) => {
  console.log(`Olá ${estudantes.nome}, parabéns por ter finalizado 80% do ${estudantes.projeto}`)
}

estudantes.forEach((elemento) => {
  if (elemento.status > 76 && elemento.status < 100) {
  mensagens2(elemento);
  }
});