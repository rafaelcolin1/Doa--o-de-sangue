document.getElementById("formDoacao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

let sobrenome = nome.split(" ");

    if (nome.length < 3) return alert("Nome Inválido");

    if (sobrenome.length < 2) return alert("Sobrenome Inválido");

    if (email.length == "") return alert("Email Inválido");

    if (!email.includes("@")) return alert("Email Inválido");

    if (cpf.length == "") return alert("CPF Inválido");

    if (telefone.length < 8) return alert("Telefone Inválido");

    if (idade < 16) {

        alert("Você deve ser maior de 16 anos");
    }


    if (peso < 50) {
        alert("Você deve pesar mais de 50Kg");
    }

    if (cidade.length == "") return alert("Cidade Inválida");

    if (estado.length == "") return alert("Estado Inválido");

    if (sangue.value == "") return alert("Por favor, selecione seu tipo sanguíneo!");







    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});
