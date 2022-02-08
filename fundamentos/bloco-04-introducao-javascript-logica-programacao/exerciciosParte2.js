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