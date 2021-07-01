/*Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. 
Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array
 numerosPrimos adicionados através do spread, juntos com outros números.*/

let numerosPrimos = [1,2,3,7,11,13,17,21,23,31]

let numeros = [...numerosPrimos,4,6,8,10,12,14,16]

console.log(numeros);





 /*Crie uma função mostrarNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min(). 
 Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, sendo portanto, necessário expandir os valores.*/

 function mostrarNumero(...paramns){
     
     return Math.min(...numeros) 
    }
     console.log(mostrarNumero());