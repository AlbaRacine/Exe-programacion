

function nomeCompleto(nome, sobrenome){
    return nome + " " + sobrenome;
}
/*console.log(nomeCompleto('Amanda', 'Ferreira'))*/
function bomDia(nome, sobrenome, nomeCompleto){
    return 'Olá,  '+ nomeCompleto(nome, sobrenome);
};
console.log(bomDia('Amanda','Ferreira',nomeCompleto))