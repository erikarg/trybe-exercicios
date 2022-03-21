// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'uva', 'manga', 'jabuticaba'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'suco de limão', 'pitada de açúcar'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));