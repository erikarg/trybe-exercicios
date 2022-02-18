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

let tamanhoDaLetra1 = document.querySelector('input[name="tamanhoDaLetra"]')
tamanhoDaLetra1.addEventListener('change', function(){
    let text1 = document.getElementById('textinho');
    let text2 = document.getElementById('textinho2');
    let text3 = document.getElementById('textinho3');
    let text4 = document.getElementById('textinho4');
    let text5 = document.getElementById('textinho5');
    text1.style.fontSize = `${tamanhoDaLetra1.value}px`
    text2.style.fontSize = `${tamanhoDaLetra1.value}px`
    text3.style.fontSize = `${tamanhoDaLetra1.value}px`
    text4.style.fontSize = `${tamanhoDaLetra1.value}px`
    text5.style.fontSize = `${tamanhoDaLetra1.value}px`
});