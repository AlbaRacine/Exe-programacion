
/*Repetir como um papagaio, Crie um loop utilizando for que se repita 5 vezes. 
Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.*/
for (i=20; i<=24;i++){
    console.log("Olá mundo!!")
}

/*Contando números ímpares, Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. 
Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.*/

for(i=1;i<=10;i+=2){
  console.log(i)
}

/*Criando a tabuada, Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for)*/


for(var i=1;i<=10;i++){
    console.log("tabuada de multiplicar del "+i);
    for(var j=1; j<=10; j++){
        console.log(i+" x "+j+"="+i*j);
    }

}
    