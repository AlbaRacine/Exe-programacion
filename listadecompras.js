/*Crie um array que contenha nomes de produtos para compra.
Após isso, exiba no console os resultados das funções relacionadas aos arrays,
que são: Join, Pop, Push, Shift e Unshift.
Também se deve escrever com suas palavras, o que cada função realiza.
Seguem abaixo alguns exemplos.
console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN)*/

let lista =['Carne de boi', 'Frango', 'Peixe', 'Porco', 'Camarão', 'Frutos do mar', 'Oleo', 'Sal']
console.log(lista);

/* Join*/
let separadosPorTraco = lista.join("-")
console.log(".JOIN(), Junta os elementos de um array usando um separador que especificamos")
console.log(separadosPorTraco)


/* Pop */
let ultimoItem = lista.pop()
console.log(".POP(), Elimina o último elemento de um array, retorna o elemento eliminado")
console.log(ultimoItem);


/*Push*/
lista.push("Vinho", "Cerveja")
console.log(".PUSH, adiciona um ou mais elementos ao final do array, retorna o novo comprimento do array")
console.log(lista)


/*Shift*/
let primeiroItem = lista.shift()
console.log(".SHIFT elimina o primeiro elemento de um array, retorna o elemento eliminado")
console.log(primeiroItem)


/*Unshift*/
lista.unshift("Carne de boi","Sal")
console.log(".UNSHIFT() Adiciona um o mais elementos ao iníciop de um array, retorna o novo comprimento do array")
console.log(lista)
