const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function contagem() {
  return names.reduce((acumulador, current) => 
  acumulador + current.split('').reduce((number1, number2) => {
    if (number2 === 'a' || number2 === 'A') return number1 +1;
    return number1; }, 0), 0);
  };
console.log(contagem());