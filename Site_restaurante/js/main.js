$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        messages: {
            nome: 'Digite seu nome',
            email: 'Digite seu E-mail',
            telefone: 'Telefone é obrigatorio',
        }
    })
});