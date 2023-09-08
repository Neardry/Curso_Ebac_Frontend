$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000')

    $('form').validate({
        messages: {
            nome: 'Digite seu nome',
            email: 'Digite seu E-mail',
            telefone: 'Telefone é obrigatorio',
            cpf: 'O CPF é obrigatorio',
            endereco: 'O endereco é obrigatorio',
            cep: 'O CEP é obrigatorio'
        }
    })
});