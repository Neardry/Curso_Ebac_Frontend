const formulario = document.getElementById('Formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
let formularioValido = false;
let mensagemIncorreta = document.querySelector('.mensagemIncorreta');
let mensagemSucesso = document.querySelector('.mensagemCorreta');

function validaConta(A , B) {
    if (A <= B) {
        mensagemIncorreta.style.display = 'none';
        mensagemSucesso.style.display = 'block';
        campoA.value = '';
        campoB.value = '';
    } else {
        mensagemSucesso.style.display = 'none';
        mensagemIncorreta.style.display = 'block';
    }
}


formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    formularioValido = validaConta(parseFloat(campoA.value), parseFloat(campoB.value));
    return formularioValido;

})