function noClick() {
    document.getElementById('botaoEnviar').addEventListener('click', function(proibeClick) {
        proibeClick.preventDefault()
    })
};

function proibeClick() {
    const info = document.getElementsByName('concordo');
    if (info.checked == false) {
        return alert('Autorize o uso das imagens para enviar suas informações')
    } else {
        return alert('Dados enviados com sucesso! Obrigado por participar do curso da Trybe')
    }
}