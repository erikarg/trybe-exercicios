let colors = ['green', 'violet', 'red', 'yellow', 'orange', 'pink', 'brown','blue', 'white', 'black']

let button1 = document.getElementById('botao');

button1.addEventListener('click', function(){
    var randomColor = colors [Math.floor(Math.random()*colors.length)]
    let back = document.getElementById('bg');
    back.style.background = randomColor;
})

let colors2 = ['white', 'red', 'grey', 'yellow', 'black', 'brown', 'green']

let button2 = document.getElementById('botao2'); 

button2.addEventListener('click', function() {
    var aleatoria = colors2 [Math.floor(Math.random()*colors2.length)]
    let text1 = document.getElementsByClassName('text0');
    for (i = 0; i < text1.length; i++) {
        text1.item(i).style.color = aleatoria;
    }
})

// Ajustar abaixo, ainda não funciona
let estilosDaFonte = ['Impact, Charcoal, sans-serif', 'Lucida Sans, Lucida Grande, Verdana']

let button3 = document.getElementById('botao3');

button3.addEventListener('click', function() {
    var aleatoria2 = estilosDaFonte [Math.floor(Math.random()*estilosDaFonte.length)]
    let text5 = document.getElementsByClassName('text0');
        text5.style.fontFamily = aleatoria2;
    })