class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.porcento = 0.1; // Defi
    }
    calcularDesconto() {

        this.desconto = this.preco - (this.preco * this.porcento)
        console.log(this.desconto);
    }
}
class Livro extends Produto {
    constructor(nome, preco) {
        super(nome, preco)
        this.porcento = 0.2;
    }
    calcularDesconto() {
        super.calcularDesconto(this.porcento);
    }
}
const livro = new Livro('Livros', 100.00);
livro.calcularDesconto();
