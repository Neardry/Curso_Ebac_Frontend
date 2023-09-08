$(document).ready(function(){
    const form = $('#formulario')
    const novaTarefa = $('#novaTarefa');
    const listaTarefas = $('ol')

    $(form).on('submit', function(e){
        e.preventDefault();
        const novoItem = $('<li style="display: none"></li>');

        $(`<a id="linkTarefa" href="">${novaTarefa.val()}</a>`).appendTo(novoItem);
        
        $(novoItem).appendTo('ol').fadeIn(1000);
        
        novaTarefa.val('')

    })
    listaTarefas.on('click', 'li a', function(e){
        e.preventDefault();
        let linkRiscado = $(this).addClass('linkRiscado');
        linkRiscado;
    })

})