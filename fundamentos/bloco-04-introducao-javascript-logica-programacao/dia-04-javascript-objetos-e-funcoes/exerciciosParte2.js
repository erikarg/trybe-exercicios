// Exercício 1
function verificaPalindrome (palavra) {
    let reverse = palavra.split('').reverse().join('');
    if (reverse === palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('onibus'));
console.log(verificaPalindrome('ama'));

// Exercício 2
let array = [2, 3, 6, 7, 10, 1];
function verificaMaiorIndice () {
    let maior = array[0];
    let indice = 0;
    for (let i=0; i < array.length; i += 1) {
        if (array[i] > maior) {
            maior = array[i];
            indice = i;
        }
    }
    return indice;
}
console.log(verificaMaiorIndice(array))

// Exercício 3
let array2 = [2, 4, 6, 7, 10, 0, -3];
function verificaMenorIndice (numeros) {
    let menor = 0;
    for (let indice2 in numeros) {
        if (numeros[menor] > numeros[indice2]) {
            menor = indice2;
        }
    }
    return menor;
}
console.log(verificaMenorIndice(array2))

// Exercício 4
let arrayDeNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function verificaMaisCaracteres (palavras) {
    let maiorPalavra = palavras[0];
    for (let index in palavras) {
        if (maiorPalavra.length < palavras[index].length) {
            maiorPalavra = palavras[index];
    }
}
return maiorPalavra;
}
console.log(verificaMaisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercício 5
let array3 = [2, 3, 2, 5, 8, 2, 3];
function inteiroQueMaisSeRepete () {
    for (var i = 0; i <= array3.length; i += 1) {
        if ((array3[i] != 0 ))
          return i;
    }
}
console.log(inteiroQueMaisSeRepete());

// Exercício 6

// Exercício 7

