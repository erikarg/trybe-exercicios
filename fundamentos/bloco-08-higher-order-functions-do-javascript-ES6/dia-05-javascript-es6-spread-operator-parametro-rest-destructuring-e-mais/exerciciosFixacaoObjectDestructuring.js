
const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const weekdays2 = [...workDays, 'Feriado Aleatório', ...weekend];
console.log(weekdays2);

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const terceiroObjeto = {
  ...user,
  ...jobInfos,
};

console.log(`Hello, I'm ${user.name}, I'm ${user.age} years old and I'm ${user.nationality}. I work as a ${jobInfos.profession} and my squad is ${jobInfos.squadInitials} - ${jobInfos.squad}.`);