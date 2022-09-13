function enviar() {
    let a = parseInt(document.querySelector('#a').value);
    let b = parseInt(document.querySelector('#b').value);
    let divMensagem = document.querySelector('#mensagem');

    let idade = a + b

    let estilo;
    if (idade % 2 == 0) {
        estilo = 'menor';
    }
    else {
        estilo = 'maior';
    }

    // divMensagem.innerHTML += '<div>' + idade + '</div>';
    let div = document.createElement('div');
    div.textContent = idade;
    divMensagem.append(div);
    div.classList.add(estilo);

    let divEspecifica = document.querySelector(`#${estilo}es`);
    divEspecifica.innerHTML += '<div>' + idade + '</div>';
}

function calcularIdade(ano) {
    let idade = 2021 - ano;
    return idade;
}

function somarIdades() {
    let divIdades = document.querySelectorAll('#mensagem div');
    let soma = 0;
    for (let div of divIdades) {
        let idade = parseInt(div.textContent);
        soma += idade;
    }
    let divSoma = document.querySelector('#somaIdades');
    divSoma.textContent = soma;
}
