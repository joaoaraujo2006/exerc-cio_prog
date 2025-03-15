## Exercicios

# 1 - Resposta

a) A saída será undefined seguido de erro

# 2 - Resposta

d) Substituir if (a || b === 0) por if (a === 0 && b === 0)

Na expressão inicial (a || b == 0), ele apenas verifica se b é igual a 0 para representar o número inválido, já que || (ou) e && (e) não servem para repetir apenas variáveis, mas sim para avaliar condições completas. Então, nessa expressão, ele apenas verifica a e não a compara com 0; apenas a variável b é comparada.

De qualquer forma, o correto é retirar a verificação como um todo, já que em uma soma, o 0 não é um número inválido, ao contrário de uma multiplicação ou divisão.

# 3 - Resposta

b) O código imprime 200, já que no switch case, o código só para de verificar quando chamamos o break. Como ele não foi chamado no case "eletrônico", o código continua para o seguinte com o valor 200.

# 4 - Resposta

d) O código cria um array chamado números com os valores [1, 2, 3, 4, 5]. Na linha 3, ele pega os valores do array e, no método .map(), pega todos os valores e os multiplica por 2, substituindo os valores anteriores no array. Em seguida, ele filtra apenas os novos números que são maiores que 5 e, por último, soma todos os números restantes. Na linha 5, ele exibe o resultado no console.

# 5 - Resposta

c) Na linha 1, o código cria uma lista com 4 valores ["banana", "maçã", "uva", "laranja"]. Na linha 2, ele usa o comando .splice() na lista para retirar os valores 1: “maçã” e 2: “uva” e substitui-os por “abacaxi” e “manga”. Na última linha, ele exibe a nova array no console.

# 6 - Resposta

b) As duas informações são verdadeiras, mas a segunda não justifica a primeira. A segunda sentença apenas complementa a primeira com uma forma de implementação. Portanto, a afirmação 2 não justifica o motivo da primeira ser verdadeira, ela apenas complementa com uma informação adicional.

# 7 - Resposta

a) I e II são verdadeiras.

# 8 - Resposta

b) A asserção é verdadeira e a razão é falsa. JavaScript não aceita a sobrecarga de métodos, ou seja, não é possível criar métodos com o mesmo nome, mas com parâmetros diferentes, já que, nestes casos, dentro de uma classe, o último método sobrescreverá o primeiro.

# 9 - Resposta

[text](exercicio9.js)