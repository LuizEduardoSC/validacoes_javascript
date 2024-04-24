const form = document.getElementById("form-numeros");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    compararNumeros();

});

    function compararNumeros() {

        // Obtendo os valores dos campos A e B
        let valorA = document.getElementById('campoA').value;
        let valorB = document.getElementById('campoB').value;

        // Convertendo os valores para números
        valorA = Number(valorA);
        valorB = Number(valorB);

        // Selecionando o elemento para exibir a mensagem
        /* let mensagemElemento = document.getElementById('mensagem'); */
        const mensagemSucesso = document.querySelector(".success-message");
        const mensagemErro = document.querySelector(".error-message");

        // Verificando se o número B é maior que o número A
        if (valorB > valorA) {
            // Se for maior, exibe uma mensagem positiva
            mensagemSucesso.textContent = "Formulário válido! O valor B é maior que o valor A.";
            mensagemSucesso.style.display = "block";
            mensagemErro.style.display = "none";
        } else {
            // Se for menor, exibe uma mensagem negativa
            mensagemErro.textContent = "Formulário inválido. O valor B deve ser maior que o valor A.";
            mensagemErro.style.display = "block";
            mensagemSucesso.style.display = "none";
        }
    }