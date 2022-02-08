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