class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade);
        this.salario = salario;
    }

    apresentar() {
        super.apresentar();
        console.log(`Meu salário é R$ ${this.salario}.`);
    }
}
const pessoa = new Pessoa("João", 30);
pessoa.apresentar();  //
// Criando uma instância da classe Funcionario
const funcionario = new Funcionario("Maria", 28, 2500);
funcionario.apresentar(); 