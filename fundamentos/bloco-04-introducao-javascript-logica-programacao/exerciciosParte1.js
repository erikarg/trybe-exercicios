let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

for (let value in info) {
    console.log('Bem-vinda, ' + info.personagem)
};

for (let object in info) {
    console.log(object+':', info[object]+';')
};

for (let keys in info) {
    console.log(keys)
}