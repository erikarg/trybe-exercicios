const manha = () => 'Acordando!!';

const tarde = () => 'Bora tomar café!!';

const noite = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(manha));
console.log(doingThings(tarde));
console.log(doingThings(noite));