function calcularIdade() {
    var anoNascimento = document.getElementById("anoNascimento").value;
    var anoAtual = document.getElementById("anoAtual").value;
    var idade = anoAtual - anoNascimento;

    if (idade < 0) {
        document.getElementById("resultado").textContent = "Você digitou errado, não tem como ter idade negativa!!";
    } else {
        document.getElementById("resultado").textContent = "Você tem " + idade + " anos!";
    }
}