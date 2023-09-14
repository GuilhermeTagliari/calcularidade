function calcularIdade(anoNascimento , anoAtual) {
    var idade = anoAtual - anoNascimento;
    return idade;
}

var anoNascimento = prompt("Em que ano você nasceu?");
var anoAtual = prompt("Qual o ano atual?");

var idade = anoAtual-anoNascimento;

if(idade < 0 ){
    console.log("Você digitou errado, não tem como ter idade negativa!!");

}else{
    console.log("Você tem "+idade+" anos!")
}

