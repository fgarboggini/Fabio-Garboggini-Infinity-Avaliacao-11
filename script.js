const perguntas = [
    'Quem foi o líder da Revolução Francesa?',
    'Em que ano aconteceu a Independência do Brasil?',
    'Quem foi o primeiro presidente do Brasil?',
    'Qual foi o primeiro imperador do Brasil?',
    'Quem foi o líder do movimento de direitos civis nos EUA?',
    'Em que ano ocorreu a Revolução Russa?',
    'Quem liderou a luta contra o apartheid na África do Sul?',
    'Quem descobriu o Brasil em 1500?',
    'Em que ano caiu o Muro de Berlim?',
    'Quem foi o presidente dos Estados Unidos durante a Segunda Guerra Mundial?'
];
const opcoes = [
    ["Napoleão Bonaparte", "Maximilien Robespierre", "Luís XVI", "Karl Marx"],
    ["1820", "1822", "1830", "1889"],
    ["Deodoro da Fonseca", "Dom Pedro II", "Juscelino Kubitschek", "Getúlio Vargas"],
    ["Dom Pedro I", "Dom Pedro II", "Tiradentes", "José Bonifácio"],
    ["Malcolm X", "Martin Luther King Jr.", "Nelson Mandela", "Rosa Parks"],
    ["1905", "1917", "1923", "1939"],
    ["Nelson Mandela", "Desmond Tutu", "Steve Biko", "Oliver Tambo"],
    ["Pedro Álvares Cabral", "Cristóvão Colombo", "Américo Vespúcio", "Vasco da Gama"],
    ["1979", "1985", "1989", "1991"],
    ["Harry S. Truman", "Franklin D. Roosevelt", "Woodrow Wilson", "Dwight D. Eisenhower"]
];
const respostasCorretas = [1, 1, 0, 0, 1, 1, 0, 0, 2, 1];
const dicas = [
    'Ele foi um dos principais líderes dos jacobinos.',
    'Foi proclamada pelo grito "Independência ou Morte".',
    'Ele foi nomeado após a Proclamação da República.',
    'Foi o filho de Dom João VI.',
    'Ele organizou a Marcha de Washington.',
    'Aconteceu durante a Primeira Guerra Mundial.',
    'Ele se tornou o primeiro presidente negro da África do Sul.',
    'A frota portuguesa chegou ao Brasil em 1500.',
    'Foi um dos eventos mais significativos do fim da Guerra Fria.',
    'Ele liderou os EUA durante a maior parte da Segunda Guerra Mundial.'
];
let perguntaAtual = 0;
let totalPerguntas = 10;
const botaoProxima = document.getElementById('proxima');
const botaoRecarregar = document.getElementById('recarregar');

gerarPergunta();
function gerarPergunta() {
    document.getElementById("pergunta").textContent = perguntas[perguntaAtual];
    const botoesOpcoes = document.querySelectorAll('.alternativa');
    botoesOpcoes.forEach((botao, indice) => {
        botao.textContent = opcoes[perguntaAtual][indice];
        botao.classList.remove("acertou", "errou"); 
    
    document.getElementById('feedbackResposta').textContent = '';
    document.getElementById('dica').textContent = '';
    botaoProxima.style.display = 'none';
}

function verificarResposta(resposta) {
    let feedback = document.getElementById('feedbackResposta');
    let dica = document.getElementById('dica');
    resposta = parseInt(resposta);
    const botoesOpcoes = document.querySelectorAll('.alternativa');
    
    if (resposta === respostasCorretas[perguntaAtual]) {
        feedback.textContent = "Acertou!!!";
        feedback.style.color = "green";
        botoesOpcoes[resposta].classList.add("acertou"); 
        if (perguntaAtual < totalPerguntas - 1) {
            botaoProxima.style.display = 'block';
        } else {
            botaoRecarregar.style.display = 'block';
        }
    } else {
        feedback.textContent = "Resposta errada, vamos tentar novamente.";
        feedback.style.color = "red";
        dica.textContent = "Dica: " + dicas[perguntaAtual]; 
        botoesOpcoes[resposta].classList.add("errou"); 
    }
}

document.querySelectorAll('.alternativa').forEach(botao => {
    botao.addEventListener('click', function () {
        verificarResposta(this.value);
    });
});

botaoProxima.addEventListener('click', () => {
    perguntaAtual++;
    gerarPergunta();
});

botaoRecarregar.addEventListener('click', () => {
    location.reload();
});