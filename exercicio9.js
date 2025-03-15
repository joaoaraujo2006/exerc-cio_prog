function somaArray(numeros) {

    for (i = 0; i < numeros.length; i++) { // .size não existe, o correto é .length
        numerosMulti = numeros.map(i => i * 2); // define numeroMulti como o Array numeros multiplicado por 2
        soma = numerosMulti.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); // variável soma é igual a todos os números somados

    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));