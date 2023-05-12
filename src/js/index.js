function gameQuiz(){
const botaoFechar = document.querySelector('.botao-fechar');
const imagensQuiz = document.querySelector('.imagens-quiz');
const botaoImagen = document.querySelector('#botao-img');
const textoPerguntas = document.querySelector(".texto-perguntas");
const numeroPerguntas = document.querySelector(".numero-perguntas");
const botaoRespostaA = document.querySelector("#alternativa-A");
const botaoRespostaB = document.querySelector("#alternativa-B");
const botaoRespostaC = document.querySelector("#alternativa-C");
const botaoRespostaD = document.querySelector("#alternativa-D");
const botaoVoltar = document.querySelector("#botao-voltar");
const botaoReinicar = document.querySelector("#botao-reiniciar");
const botaoAvancar = document.querySelector("#botao-avancar");
const telaFimDeJogo = document.querySelector(".fim-jogo");
const pontosPorcentagem = document.querySelector(".pontos-porcentagem");
const barraDeNota = document.querySelector(".barra-de-nota");
const imagen = document.querySelector('.img-quiz');
const fonte = document.querySelector('.fonte');

let indice = 0;
let pontuacao = 0;
let totalDePerguntas;
let fimDeJogo = false;
let notaFinal = 0;

function mostraImagen (){
imagensQuiz.classList.toggle('aberto');
}
function armazenaPerguntas() {
  const perguntas = [
    {
      pergunta: "Em que ano a lei 10.639/2003 foi promulgada?",
      respostaA: "2005",
      respostaB: "2008",
      respostaC: "2003",
      respostaD: "2015",
      correta: "2003",
      foto: "../src/img/questao-1.jpeg",
      fonte:"https://jornal.usp.br/diversidade/especial-lei-10-639-ha-quase-20-anos-uma-lei-na-educacao-tenta-mudar-o-quadro-do-racismo-no-brasil/",
    },
    {
      pergunta: "Qual é o principal objetivo da lei 10.639/2003?",
      respostaA: "Tornar obrigatório o ensino de História e Cultura Afro-brasileira e africana na educação básica do país.",
      respostaB: "Tornar obrigatório o ensino de História e Cultura Afro-brasileira apenas no Ensino Fundamental.",
      respostaC: "Tornar obrigatório o ensino de História e Cultura Afro-brasileira e Africana e Indígena apenas no Ensino Médio.",
      respostaD: "Tornar obrigatório o ensino de História e Cultura Afro-brasileira e africana apenas no Ensino Superior.",
      correta: "Tornar obrigatório o ensino de História e Cultura Afro-brasileira e africana na educação básica do pai.",
      foto: "../src/img/questao-2.jpeg",
      fonte:"https://www.professorborges.com.br/",
    },
    {
      pergunta: "A lei 10.639/2003, também inclui no calendário escolar uma data muito importante no Brasil, que data é essa e o que se comemora nesse dia?",
      respostaA: "13 de maio, abolição da escravidão.",
      respostaB: "20 de novembro – Dia da Consciência Negra.",
      respostaC: "15 de novembro – Proclamação da República.",
      respostaD: "25 de maio – Dia Internacional da África.",
      correta: "20 de novembro – Dia da Consciência Negra.",
      foto: "../src/img/questao-3.jpg",
      fonte:"https://www.correiodosmunicipios-al.com.br/2017/04/serra-da-barriga-al-concorre-ao-titulo-de-patrimonio-cultural-do-mercosul/",
    },
    {
      pergunta: "O Dia da Consciência está relacionado a luta de qual personagem da história brasileira?",
      respostaA: "João Cândido",
      respostaB: "Maria Filipa",
      respostaC: "Carolina Maria de Jesus",
      respostaD: "Zumbi dos Palmares",
      correta: "Zumbi dos Palmares",
      foto: "../src/img/questao-4.jpg",
      fonte:"https://acebqualifica.org.br/10a-lavagem-da-estatua-de-zumbi-vai-marcar-a-celebracao-do-novembro-negro-em-salvador/",
    },
    {
      pergunta: "A criação da lei 10.639/2003, foi fruto da luta, especialmente:",
      respostaA: "Movimento Negro",
      respostaB: "Movimento feminista",
      respostaC: "Movimento abolicionista",
      respostaD: "Movimento ambientalista",
      correta: "Movimento Negro",
      foto: "../src/img/questao-5.jpeg",
      fonte:"https://simaigualdaderacial.com.br/site/movimento-negro-e-o-7-de-setembro-a-historia-que-ninguem-conta-sobre-a-independencia-do-brasil/",
    },
    {
      pergunta: "Em 2008 a lei 10.639/2003, foi alterada por outra lei, a 11.645, incluindo, também como obrigatório o ensino de história e cultura, dos povos:",
      respostaA: "Europeus",
      respostaB: "Asiáticos",
      respostaC: "Negros",
      respostaD: "Indígenas",
      correta: "Indígenas",
      foto: "../src/img/questao-6.jpeg",
      fonte:"http://diversaescola.blogspot.com/2011/08/lei-116452008.html",
    },
    {
      pergunta: "Dentre os diversos significados e valores da lei 10.639/2003, podemos destacar:",
      respostaA: "Valorização da cultura negra apenas no dia 20 de novembro.",
      respostaB: "Realização de uma educação inclusiva e antirracista somente no Ensino Médio.",
      respostaC: "Combate ao racismo através da educação.",
      respostaD: "Estudar na educação básica temas da história negra apenas na perspectiva nacional.",
      correta: "Combate ao racismo através da educação.",
      foto: "../src/img/questao-7.jpeg",
      fonte:"https://www.youtube.com/watch?v=9EV9BUshXrI",
    },
    {
      pergunta: "Através da lei 10.639/2003, o estudo sobre a África passou a ter novos olhares, levando em consideração aspectos do continente africano, como:",
      respostaA: "Atrasada, mística, selvagem e sem progresso.",
      respostaB: "A existência de uma rica história e uma cultura diversificada.",
      respostaC: "Primitiva, faminta, homogênea e com guerras.",
      respostaD: "Exótica, clima hostil e não civilizada.",
      correta: "A existência de uma rica história e uma cultura diversificada.",
      foto: "../src/img/questao-8.jpeg",
      fonte:"https://www.professorborges.com.br/",
    },
    {
      pergunta: "Com a lei 10.639/2003, novas perspectivas acerca do ensino de História e Cultura Afro-brasileira e Africana, foram inseridas nos currículos da Educação Básica do país, permitindo:",
      respostaA: "Uma invisibilidade em relação a história e cultura dos negros e negras no Brasil.",
      respostaB: "A valorização de uma histórica do povo negro no Brasil, sem levar em consideração as especificidades locais e regionais.",
      respostaC: "Compreender os negros e negras como sujeitos históricos, que elaboram uma rica história e uma diversificada cultura.",
      respostaD: "A omissão do protagonismo negro, bem como a ideia de empoderamento das mulheres negras.",
      correta: "Compreender os negros e negras como sujeitos históricos construtores de sua própria história.",
      foto: "../src/img/questao-9.jpeg",
      fonte:"https://www.professorborges.com.br/",
    },
    {
      pergunta: "O Colégio Estadual Professor Edgard Santos (CEPES), localizado na cidade de Governador Mangabeira, faz parte de uma região da Bahia em que o estudo da sua história e cultura, possui relações diretas com os objetivos da lei 10.639/2003. Essa região é conhecida como:",
      respostaA: "Chapada Diamantina",
      respostaB: "Sertão",
      respostaC: "Recôncavo",
      respostaD: "Litoral",
      correta: "Recôncavo",
      foto: "../src/img/questao-10.jpeg",
      fonte:"https://www.professorborges.com.br/",
    },
  ];
  totalDePerguntas = perguntas.length;
  return perguntas;
}
function trocaIndice() {
  indice++;
  return indice;
}
function Pontuacao() {
  pontuacao++;
  return pontuacao;
}
function mostraPerguntas() {
  let perguntas = armazenaPerguntas();
  let imagens = perguntas[indice].foto;
  let fontes = perguntas[indice].fonte;

  textoPerguntas.textContent = perguntas[indice].pergunta;
  botaoRespostaA.textContent = perguntas[indice].respostaA;
  botaoRespostaB.textContent = perguntas[indice].respostaB;
  botaoRespostaC.textContent = perguntas[indice].respostaC;
  botaoRespostaD.textContent = perguntas[indice].respostaD;
  imagen.setAttribute("src", imagens);
  fonte.setAttribute("href", fontes);
  botaoRespostaA.style.background = "white";
  botaoRespostaB.style.background = "white";
  botaoRespostaC.style.background = "white";
  botaoRespostaD.style.background = "white";
  numeroPerguntas.textContent = `${indice + 1} de ${totalDePerguntas}`;
}
function calculaPontuação() {
  let perguntas = armazenaPerguntas();
  let calculaPontuação = (pontuacao * 100) / perguntas.length;

  notaFinal = calculaPontuação.toFixed(2);
  return calculaPontuação;
}
function numeroDePerguntas() {
  let Perguntas = armazenaPerguntas();
  totalDePerguntas = Perguntas.length;
}
function mudaPergunta() {
  let totalPerguntas = totalDePerguntas;
  let respondidas = indice;
  if (respondidas == totalDePerguntas) {
    atribuirNota();
    telaFimDeJogo.classList.add("aberto");
  } else {
    numeroDePerguntas();
    mostraPerguntas();
  }
}
function atribuirNota() {
  pontosPorcentagem.textContent = `${notaFinal}%`;
  barraDeNota.style.width = `${notaFinal}%`;
}
function respostaA() {
  if (!fimDeJogo) {
    let pergunta = armazenaPerguntas();
    let btnRespostaA = pergunta[indice].respostaA;
    let resposta = pergunta[indice].correta;
    if (btnRespostaA === resposta) {
      botaoRespostaA.style.background = "green";
      trocaIndice();
      Pontuacao();
      fimDeJogo = true;
    } else {
      botaoRespostaA.style.background = "red";
      trocaIndice();
      fimDeJogo = true;
    }
  }
}
function respostaB() {
  if(!fimDeJogo){
  let pergunta = armazenaPerguntas();
  let btnRespostaB = pergunta[indice].respostaB;
  let resposta = pergunta[indice].correta;
  if (btnRespostaB === resposta) {
    botaoRespostaB.style.background = "green";
    trocaIndice();
    Pontuacao();
    fimDeJogo = true;
  } else {
    botaoRespostaB.style.background = "red";
    trocaIndice();
    fimDeJogo = true;
  }
}
}
function respostaC() {
  if(!fimDeJogo){
  let pergunta = armazenaPerguntas();
  let btnRespostaC = pergunta[indice].respostaC;
  let resposta = pergunta[indice].correta;
  if (btnRespostaC === resposta) {
    botaoRespostaC.style.background = "green";
    trocaIndice();
    Pontuacao();
    fimDeJogo = true;
  } else {
    botaoRespostaC.style.background = "red";
    trocaIndice();
    fimDeJogo = true;
  }
}
}
function respostaD() {
  if(!fimDeJogo){
  let pergunta = armazenaPerguntas();
  let btnRespostaD = pergunta[indice].respostaD;
  let resposta = pergunta[indice].correta;
  if (btnRespostaD === resposta) {
    botaoRespostaD.style.background = "green";
    trocaIndice();
    Pontuacao();
    fimDeJogo = true;
  } else {
    botaoRespostaD.style.background = "red";
    trocaIndice();
    fimDeJogo = true;
  }
}
}
botaoRespostaA.addEventListener("click", () => {
  respostaA();
});
botaoRespostaB.addEventListener("click", () => {
  respostaB();
});
botaoRespostaC.addEventListener("click", () => {
  respostaC();
});
botaoRespostaD.addEventListener("click", () => {
  respostaD();
});
botaoAvancar.addEventListener("click", () => {
  mudaPergunta();
  calculaPontuação();
  atribuirNota();
  fimDeJogo = false;
});
botaoFechar.addEventListener('click', ()=>{
  mostraImagen();
});
botaoImagen.addEventListener('click', ()=>{
  mostraImagen();
});
numeroDePerguntas();
mostraPerguntas();
}
gameQuiz();
