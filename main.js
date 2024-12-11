const form = document.getElementById('atividade');
const imgAprovado = '<img src="./image/Emoji festejando.png" alt="Emoji celebrando">';
const imgReprovado = '<img src="./image/Emoji triste.png" alt="Emoji triste">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = "";

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`)
    }
    else{
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    // Criação da nova linha
    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += "</tr>"; // Fechamento correto da linha

    // Adiciona a nova linha ao conteúdo existente
    linhas += linha;
    }

    // Limpa os campos do formulário após o envio
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas; // Atualiza o conteúdo da tabela
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media-final-valor").innerHTML = mediaFinal
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    console.log(mediaFinal);
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
