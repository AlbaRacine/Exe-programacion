/*Transforme as seguintes funções em arrow functions:

function print(mensajem){
  return(mensajem)
}  console.log("Olá bom dia!!");*/

let  print =() =>'Olá bom dia!!'; console.log(print("Olá bom dia!!"))

  


 /* function soma(n1 ,n2){
      return n1+n2
  }
  console.log(soma(10,10))*/

  let soma = (n1 ,n2) =>  n1+n2 ; console.log(soma(10,10));