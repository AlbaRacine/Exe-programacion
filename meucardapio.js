/*Crie uma função construtora chamada Restaurante, que receba como parâmetros 
o nome do restaurante e o cardápio (que será um array de strings).

Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem 
de boas-vindas, informando o nome do restaurante, e o cardápio.*/

function Restaurante(nome, cardapio){
    this.nome = nome;
    this.cardapio = cardapio;
    
};
let meuRestaurante = new Restaurante(('Marmitex'),['Salada', 'carne con cenoura', 'arroz simples', 'feijao simple', 'pernil asado'] );

 
console.log(meuRestaurante);

/*Eu não consegui que funcionasse com a função de entrada*/