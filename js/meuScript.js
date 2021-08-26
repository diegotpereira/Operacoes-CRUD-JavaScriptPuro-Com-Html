var linhaSelecionada = null

function onFormSubmit() {
    if (validar) {
        var dadosFormulario = lerDadosFormulario();
        if (linhaSelecionada == null)
            inserirNovoRegistro(dadosFormulario);
        else
            atualizarRegistro(dadosFormulario);
        limparFormulario();
    }
}

function lerDadosFormulario() {
    var dadosFormulario = {};
    dadosFormulario["nomeCompleto"] = document.getElementById("nomeCompleto").value;
    dadosFormulario["codigoFunc"] = document.getElementById("codigoFunc").value;
    dadosFormulario["salario"] = document.getElementById("salario").value;
    dadosFormulario["cidade"] = document.getElementById("cidade").value;

    return dadosFormulario;
}

function inserirNovoRegistro(data) {
    var minhaTabela = document.getElementById("listaFunc").getElementsByTagName('tbody')[0];

    var newRow = minhaTabela.insertRow(minhaTabela.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomeCompleto;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.codigoFunc;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salario;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cidade;
    cell4 = newRow.insertCell(4);

    cell4.innerHTML = `<a onClick="naEdicao(this)">Editar</a>
                       <a onClick="naExclusao(this)">Excluir</a>`;


}

function limparFormulario() {
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("codigoFunc").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("cidade").value = "";

    linhaSelecionada = null;
}

function naEdicao(td) {
    linhaSelecionada = td.parentElement.parentElement;
    document.getElementById("nomeCompleto").value = linhaSelecionada.cells[0].innerHTML;
    document.getElementById("codigoFunc").value = linhaSelecionada.cells[1].innerHTML;
    document.getElementById("salario").value = linhaSelecionada.cells[2].innerHTML;
    document.getElementById("cidade").value = linhaSelecionada.cells[3].innerHTML;
}

function atualizarRegistro(dadosFormulario) {
    linhaSelecionada.cells[0].innerHTML = dadosFormulario.nomeCompleto;
    linhaSelecionada.cells[1].innerHTML = dadosFormulario.codigoFunc;
    linhaSelecionada.cells[2].innerHTML = dadosFormulario.salario;
    linhaSelecionada.cells[3].innerHTML = dadosFormulario.cidade;
}

function naExclusao(td) {
    if (confirm('Tem certeza que deseja deletar este registro?')) {
        linha = td.parentElement.parentElement;
        document.getElementById("listaFunc").deleteRow(linha.rowIndex);

        limparFormulario();
    }
}

function validar() {
    eValido = true;
    if (document.getElementById("nomeCompleto").value == "") {
        eValido = false;
        document.getElementById("nomeCompletoValidacaoErro").classList.remove(hide);
    } else {
        eValido = true;
        if (!document.getElementById("nomeCompletoValidacaoErro").classList.contains("hide"))
            document.getElementById("nomeCompletoValidacaoErro").classList.add("hide");

    }
    return eValido;
}