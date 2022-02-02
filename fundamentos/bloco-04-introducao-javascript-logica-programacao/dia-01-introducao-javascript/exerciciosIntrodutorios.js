const pessoaCandidata = 45;

if (pessoaCandidata >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
} else if (pessoaCandidata < 80 && pessoaCandidata >= 60){
    console.log("Você está na nossa lista de espera")
} else {
    console.log("Você foi reprovada(o)")
}
// separando exercícios
const currentHour = 16.20;
let message = "";

if (currentHour >= 22) {
    console.log(message = "Não deveríamos comer nada, é hora de dormir")
} else if (currentHour >= 18 && currentHour < 22) {
    console.log(message = "Rango da noite, vamos jantar :D")
} else if (currentHour >= 14 && currentHour < 18) {
    console.log(message = "Vamos fazer um bolo pro café da tarde?")
} else if (currentHour >= 11 && currentHour <= 14) {
    console.log(message = "Hora do almoço!!!")
} else {
    console.log(message = "Hmmm, cheiro de café recém passado")
}

console.log(message)
// separando exercícios
let weekDay = "sábado";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
    console.log("FINALMENTE, descanso merecido UwU")
}
// separando exercícios
let estadoPessoaCandidata = "lista";

switch (estadoPessoaCandidata) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;

    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    
    case "lista":
        console.log("Você está na nossa lista de espera")
        break;
    
    default:
        console.log("não se aplica");
}
/// separando exercicios