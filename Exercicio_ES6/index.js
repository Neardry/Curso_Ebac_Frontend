const alunos = [
    {nome: 'Paulo', nota: 8},
    {nome: 'Joaquim', nota: 2},
    {nome: 'Pedro', nota: 5},
    {nome: 'Bruno', nota: 10},
    {nome: 'Marcos', nota: 6},
    {nome: 'Patricia', nota: 8},
    {nome: 'Igor', nota: 9},
    {nome: 'Gabriel', nota: 5},
    {nome: 'Gustavo', nota: 4}
];

function retornaNotaMaior() {
    const notaMaior = alunos.filter(function(aluno) {
        return aluno.nota >= 6
    });
    console.log(notaMaior);
};

retornaNotaMaior();