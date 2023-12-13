function Pessoa(nome) {
    this.nome = nome;
}

function Aluno(nome, matricula, materias) {
    let _matricula = matricula;

    this.getMatricula = function() {
        return _matricula;
    }

    this.materias = materias;

    Pessoa.call(this, nome);
}

function Professor(nome, matricula, materias, salario) {
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    };

    this.setSalario = function(valor) {
        if(typeof valor === 'number') {
            _salario = valor;
        };
    };

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.04;
        this.setSalario(novoSalario);
    }

    Aluno.call(this, nome, matricula, materias);
}

const pessoa1 = new Pessoa('joao');

const aluno1 = new Aluno('joao', 3333, 'HTML, JS');
const professor = new Professor('Marcelo', 2222, 'FullStack', 5000);

professor.aumento();
console.log(professor.getSalario());