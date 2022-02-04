let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1
for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index])
}

// Exercicio 2
var soma = 0;
for (var i = 0; i < numbers.length; i+= 1) {
    soma += numbers[i]
}
console.log(soma)

// Exercicio 3
var media = (soma)/(numbers.length)
console.log(media)

// Exercicio 4
if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

// Exercicio 5
let maiorNumero = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i]
    }
}
console.log(maiorNumero)

// Exercicio 6
let impares = 0;

for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] % 2 !== 0) {
        impares += 1;
    }
}
    if (impares === 0) {
        console.log("nenhum valor ímpar encontrado")
    } else {
        console.log(impares)
    }

// Exercicio 7
let menorNumero = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i]
    }
}
console.log(menorNumero)

// Exercicio 8
let exercicio8 = [];

for (let i=1; i <= 25; i += 1) {
    exercicio8.push(i);
}
console.log(exercicio8);

// Exercicio 9

for (let i = 0; i < exercicio8.length; i += 1) {
    console.log(exercicio8[i] / 2); 
};