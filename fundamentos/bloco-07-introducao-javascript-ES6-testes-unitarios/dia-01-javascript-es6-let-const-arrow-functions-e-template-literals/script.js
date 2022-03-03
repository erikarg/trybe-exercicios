  ////////////////// Exercícios de fixação - Parte I /////////////////

function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  // Exercicio 1 - Reescrevendo a função acima, temos: 

  const testingScope = escopo => { if (escopo === true) { 
      const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);


  ///////////////////////////////////

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.

  console.log(oddsAndEvens); // será necessário alterar essa linha 😉

  // Exercício 2 - Reescrevendo o código acima, temos:

  let oddsAndEvens = [13, 3, 4, 10, 7, 2];
  let sortOddsAndEvens = () => (oddsAndEvens.sort((a, b) => a - b));
  let sortedArray = sortOddsAndEvens();

  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);

  ////////////////// Exercícios de fixação - Parte II /////////////////

  // Excercício 1: 

  const fatorial = numero => numero > 1 ? numero * fatorial(numero - 1) : 1;
  console.log(fatorial(10));

  // Exercício 2: 

  const longestWord = phrase => phrase.split(' ').sort((word1, word2) => word2.length - word1.length)[0];

  console.log(longestWord('Testando aqui essa singela funcao para verificar qual é a maior palavra da minha string'));

  // Exercício 3: Inserido no corpo do arquivo html.

  // Exercício 4: